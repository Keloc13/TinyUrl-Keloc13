import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { CrudConstruct } from './CrudConstruct';
import { Construct } from 'constructs';


export class TinyUrlStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    
    const crud = new CrudConstruct(this, "crudConstruct", {})
  }
}
