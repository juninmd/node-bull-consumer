import { Queues } from '../enums';
import configs from '../configs';
import transport from '../email';
import BaseQueue from './base.queue';
import RedisCli from '../redis';
import Mysql from '../mysql';
import { Candidate } from '../entity/candidate.entity';

const redis = RedisCli.getInstance();

/**
 * Classe Singleton
 */
export default class CandidateQueue extends BaseQueue {
  private static instance: CandidateQueue;
  public static getInstance(): CandidateQueue {
    if (!CandidateQueue.instance) {
      CandidateQueue.instance = new CandidateQueue();
    }
    return CandidateQueue.instance;
  }

  /**
   * Colocamos como private para impedir a instância via new
   */
  private constructor() {
    super(Queues.candidate);
    this.queue.process((data) => this.process(data));
  }

  private async process({ data }) {
    console.log(data);
    await this.createCandidate(data.name, data.partyNumber);
    await this.sendEmail();
  }

  private async createCandidate(name: string, partyNumber: number) {
    console.log('Criando novo candidadto...');
    const candidate = new Candidate();
    candidate.name = name;
    candidate.partyNumber = partyNumber;
    await Mysql.manager.save(candidate);
    console.log(`Candidato ${name} - ${partyNumber} criado com sucesso`);
    const candidates = await Mysql.manager.find(Candidate, {});
    await redis.setJSON('candidates', candidates);
  }

  private async sendEmail() {
    await transport.sendMail({
      to: configs.mail.default.to,
      from: configs.mail.default.from,
      subject: 'Candidato Cadastrado com sucesso',
      text: 'Uhuuul',
    });
    console.log(`E-mail enviado com sucesso.`);
  }
}
