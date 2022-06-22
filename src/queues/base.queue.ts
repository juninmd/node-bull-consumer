import * as Bull from 'bull';
import { Queues } from '../enums';
import configs from '../configs';

/**
 * Classe Singleton
 */
export default class BaseQueue {
  queue: Bull.Queue<any>;

  /**
   * Colocamos como protected para impedir a instância via new
   */
  constructor(queues: Queues) {
    this.queue = new Bull(queues, {
      redis: configs.redis,
      prefix: 'bull',
    });

    this.queue.on('failed', this.failed);

    this.queue.on('completed', this.completed);

    this.queue.on('error', (error) => {
      console.error(`Falha ao conectar ao redis, verifique suas configurações: ${error}`);
    });
  }

  protected failed(job, err) {
    console.error(`Queue [${job.queue.name}] - ${JSON.stringify(job.data)} - Id ${job.id} has been failed`);
    console.error(err);
  }

  protected completed(job) {
    console.log(`Queue [${job.queue.name}] - ${JSON.stringify(job.data)} - Id ${job.id} has been completed`);
  }
}
