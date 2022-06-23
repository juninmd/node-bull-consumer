import { Queues } from '../enums';
import BaseQueue from './base.queue';

/**
 * Classe Singleton
 */
export default class LogQueue extends BaseQueue {
  private static instance: LogQueue;
  public static getInstance(): LogQueue {
    if (!LogQueue.instance) {
      LogQueue.instance = new LogQueue();
    }
    return LogQueue.instance;
  }

  /**
   * Colocamos como private para impedir a instância via new
   */
  constructor() {
    super(Queues.log);
    this.queue.process(this.process);
  }

  private process({ data }) {
    console.log(data);
  }
}
