import { SecretValue, Stack, StackProps} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CfnApp, CfnBranch } from 'aws-cdk-lib/aws-amplify';

export class Amplify extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id)
        const amplifyApp = new CfnApp(this, 'tiny-url', {
            name: 'TinyUrlKeloc13',
            repository: 'https://github.com/Keloc13/tiny-url-Keloc13-FE',
            oauthToken: 'access-token-here'
          });

          new CfnBranch(this, 'MasterBranch', {
            appId: amplifyApp.attrAppId,
            branchName: 'master' 
          });
    }
}