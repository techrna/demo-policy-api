import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PolicyController } from './policy/policy.controller';
import { PolicyService } from './policy/policy.service';
import { PolicyModule } from './policy/policy.module';

@Module({
  imports: [ConfigModule.forRoot(),MongooseModule.forRoot(process.env.MONGO_URI), PolicyModule],
  controllers: [AppController, PolicyController],
  providers: [AppService],
})
export class AppModule {}
