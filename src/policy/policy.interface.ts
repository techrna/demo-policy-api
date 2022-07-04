import { Document } from 'mongoose';

export interface Policy extends Document {
    "cis_id": string;
    "policy_name": string; 
    "rule": string; 
    "value": number; 
    "policy_group": string;
     "operator": string; 
     "severity": number; 
     "description": string; 
     "remediation_recipe": string
    }
