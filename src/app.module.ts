import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasicCommand } from './command/basic';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, BasicCommand],
})
export class AppModule {}
