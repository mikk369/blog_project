import { createConnection, ConnectionOptions } from 'typeorm';
import config from '../config/config.json';

export async function openDatabaseConnection() {
  // await closeDatabaseConnection();

  console.log({...config});

  const conn = await createConnection({
      type: "mysql",
      host: config.host,
      port: config.port,
      database: "blog",
      username: config.username,
      password: config.password,
  });
  if (!conn.isConnected) {
    throw new Error('Connection to database failed');
  }
  return conn;
}
