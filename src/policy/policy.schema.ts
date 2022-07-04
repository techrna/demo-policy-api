import * as mongoose from 'mongoose';
export const PolicySchema = new mongoose.Schema({
      "cis_id": String,
      "policy_name": String, 
      "rule": String, 
      "value": Number, 
      "policy_group": String,
       "operator": String, 
       "severity": Number, 
       "description": String, 
       "remediation_recipe": String}
  );