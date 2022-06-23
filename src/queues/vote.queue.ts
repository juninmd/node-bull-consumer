import { Queues } from '../enums';
import configs from '../configs';
import transport from '../email';
import BaseQueue from './base.queue';
import RedisCli from '../redis';

const redis = RedisCli.getInstance();

/**
 * Classe Singleton
 */
export default class VoteQueue extends BaseQueue {

  private static instance: VoteQueue;
  public static getInstance(): VoteQueue {
    if (!VoteQueue.instance) {
      VoteQueue.instance = new VoteQueue();
    }
    return VoteQueue.instance;
  }

  /**
   * Colocamos como private para impedir a instância via new
   */
  private constructor() {
    super(Queues.vote);
    this.queue.process((data) => this.process(data));
  }

  private async process({ data }) {
    console.log(data);
    await this.setVotes(data.candidateNumber);
    await this.sendEmail();
  }

  private async setVotes(this, candidateNumber: number) {
    let votes = await redis.getJSON('votes');
    if (votes === undefined) {
      votes = {};
    }
    if (!votes[candidateNumber]) {
      votes[candidateNumber] = 0;
    }
    votes[candidateNumber] += 1;
    await redis.setJSON('votes', votes);
  }

  private async sendEmail() {
    await transport.sendMail({
      to: configs.mail.default.to,
      from: configs.mail.default.from,
      subject: 'Voto computado com sucesso',
      text: 'Uhuuul',
    });
    console.log(`E-mail enviado com sucesso.`)
  }
}
