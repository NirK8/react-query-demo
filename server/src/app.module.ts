import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { HttpLoggerMiddleware } from './middlewares/http-logger';
import { DatabaseModule } from './app/database/database.module';
import { UsersModule } from './app/users/users.module';

@Module({
  imports: [DatabaseModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(HttpLoggerMiddleware).forRoutes('*');
  }
}
