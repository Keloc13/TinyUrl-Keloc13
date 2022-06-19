"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TinyUrlStack = void 0;
const aws_cdk_lib_1 = require("aws-cdk-lib");
const lambda = __importStar(require("aws-cdk-lib/aws-lambda"));
const apigw = __importStar(require("aws-cdk-lib/aws-apigateway"));
const CrudConstruct_1 = require("./CrudConstruct");
class TinyUrlStack extends aws_cdk_lib_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const crudHandler = new lambda.Function(this, 'CrudLambda', {
            runtime: lambda.Runtime.NODEJS_14_X,
            code: lambda.Code.fromAsset('lambda/crud'),
            handler: 'addTinyURL.handler'
        });
        const crud = new CrudConstruct_1.CrudConstruct(this, "crudConstruct", {
            downstream: crudHandler
        });
        new apigw.LambdaRestApi(this, 'CrudEndpoint', {
            handler: crud.handler
        });
    }
}
exports.TinyUrlStack = TinyUrlStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlueV91cmwtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aW55X3VybC1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTBEO0FBQzFELCtEQUFpRDtBQUNqRCxrRUFBb0Q7QUFDcEQsbURBQWdEO0FBR2hELE1BQWEsWUFBYSxTQUFRLG1CQUFLO0lBQ3JDLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBa0I7UUFDMUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsTUFBTSxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDMUQsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztZQUNuQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1lBQzFDLE9BQU8sRUFBRSxvQkFBb0I7U0FDOUIsQ0FBQyxDQUFBO1FBRUYsTUFBTSxJQUFJLEdBQUcsSUFBSSw2QkFBYSxDQUFDLElBQUksRUFBRSxlQUFlLEVBQUU7WUFDcEQsVUFBVSxFQUFFLFdBQVc7U0FDeEIsQ0FBQyxDQUFBO1FBRUYsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUU7WUFDNUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FDRjtBQWxCRCxvQ0FrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEdXJhdGlvbiwgU3RhY2ssIFN0YWNrUHJvcHMgfSBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSAnYXdzLWNkay1saWIvYXdzLWxhbWJkYSc7XG5pbXBvcnQgKiBhcyBhcGlndyBmcm9tICdhd3MtY2RrLWxpYi9hd3MtYXBpZ2F0ZXdheSc7XG5pbXBvcnQgeyBDcnVkQ29uc3RydWN0IH0gZnJvbSAnLi9DcnVkQ29uc3RydWN0JztcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuXG5leHBvcnQgY2xhc3MgVGlueVVybFN0YWNrIGV4dGVuZHMgU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IFN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcbiAgICBcbiAgICBjb25zdCBjcnVkSGFuZGxlciA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgJ0NydWRMYW1iZGEnLCB7XG4gICAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTRfWCxcbiAgICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldCgnbGFtYmRhL2NydWQnKSxcbiAgICAgIGhhbmRsZXI6ICdhZGRUaW55VVJMLmhhbmRsZXInXG4gICAgfSlcblxuICAgIGNvbnN0IGNydWQgPSBuZXcgQ3J1ZENvbnN0cnVjdCh0aGlzLCBcImNydWRDb25zdHJ1Y3RcIiwge1xuICAgICAgZG93bnN0cmVhbTogY3J1ZEhhbmRsZXJcbiAgICB9KVxuXG4gICAgbmV3IGFwaWd3LkxhbWJkYVJlc3RBcGkodGhpcywgJ0NydWRFbmRwb2ludCcsIHtcbiAgICAgIGhhbmRsZXI6IGNydWQuaGFuZGxlclxuICAgIH0pXG4gIH1cbn1cbiJdfQ==