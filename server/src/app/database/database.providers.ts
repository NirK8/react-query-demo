import * as mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import * as fs from 'fs';
import { join } from 'path';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> => {
      const mongod = await MongoMemoryServer.create();
      const uri = mongod.getUri();
      createConfigFile(uri);
      return mongoose.connect(uri, {
        dbName: 'react-query',
      });
    },
  },
];

const createConfigFile = (uri: string) => {
  const cwd = process.cwd();
  const globalConfigPath = join(cwd, 'globalConfig.json');

  const mongoConfig = { mongoUri: uri };
  // Write global config to disk because all tests run in different contexts.
  fs.writeFileSync(globalConfigPath, JSON.stringify(mongoConfig));
};
