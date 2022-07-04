import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PolicyController } from './policy.controller';
import { PolicySchema } from './policy.schema';
import { PolicyService } from './policy.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: "policy", schema: PolicySchema }])],
    controllers: [PolicyController],
    providers: [PolicyService],
    exports:[PolicyService]
  })
export class PolicyModule {}
