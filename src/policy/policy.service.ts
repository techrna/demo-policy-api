import {  Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Policy } from './policy.interface';

@Injectable()
export class PolicyService {
    constructor(@InjectModel('policy') private policyModel: Model<Policy>) {}

    getPolicy() {
        return this.policyModel.find()    }

        getGroupPolicy() {
            return this.policyModel.aggregate([{$addFields:{"groupings":["$policy_group","$cis_level","$severity","$cis_id","$_id"]}}])   }
}
