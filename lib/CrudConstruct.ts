import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb'
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';

export interface CrudProps {}

export class CrudConstruct extends Construct {

    public readonly handler: lambda.Function;

    constructor(scope: Construct, id: string, props: CrudProps) {
        super(scope, id)

        const tinyUrlTable = new dynamodb.Table(this, 'TinyUrlTable', {
            partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING }
        });

        this.handler = new lambda.Function(this, 'CrudHandler', {
            runtime: lambda.Runtime.NODEJS_14_X,
            code: lambda.Code.fromAsset("lambda/crud"),
            handler: "crudHandler.handler",
            environment: {
                TINY_TABLE_NAME: tinyUrlTable.tableName
            }
        })

        let api = new apigw.LambdaRestApi(this, 'CrudTinyUrlEndpoint', {
            handler: this.handler,
            proxy: false
        })

        const url = api.root.addResource("url")
        url.addMethod("GET")
        url.addMethod("POST")

        tinyUrlTable.grantReadWriteData(this.handler)
    }
}