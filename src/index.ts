import { loadEnvs } from './tools/envs.tools';
const env = process.env.NODE_ENV || 'development';
loadEnvs(`${__dirname}/../envs/.env-${env}`);
import './queues';
import AppDataSource from './mysql';

AppDataSource.initialize()
  .then(() => {
    console.log('MYSQL conectado com sucesso :)');
  })
  .catch((error) => {
    console.error('Falha ao conectar ao MYSQL');
    console.error(error);
  });

process.on('uncaughtException', (error: Error) => {
  console.error(`uncaughtException ${error.message}`);
});

process.on('unhandledRejection', (reason: any) => {
  console.error(`unhandledRejection ${reason}`);
});
