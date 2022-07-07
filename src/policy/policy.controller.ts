import { Controller, Get } from '@nestjs/common';
import { PolicyService } from './policy.service';

@Controller('policy')
export class PolicyController {
    constructor(private policyService:PolicyService){}
    @Get()
    getPolicyList()
    {
        return this.policyService.getPolicy()
    }
    @Get("/grouped")
    getPolicyGroupList()
    {
        return this.policyService.getGroupPolicy()
    }
    
}
