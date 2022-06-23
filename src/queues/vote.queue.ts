import { Queues } from '../enums';
import configs from '../configs';
import transport from '../email';
import BaseQueue from './base.queue';

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
  constructor() {
    super(Queues.vote);
    this.queue.process(this.process);
  }

  private async process({ data }) {
    console.log(data);
    await transport.sendMail({
      to: configs.mail.default.to,
      from: configs.mail.default.from,
      subject: 'Voto computado com sucesso',
      text: 'Uhuuul',
    });
    console.log(`E-mail enviado com sucesso.`)
  }
}
