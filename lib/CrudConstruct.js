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
exports.CrudConstruct = void 0;
const lambda = __importStar(require("aws-cdk-lib/aws-lambda"));
const dynamodb = __importStar(require("aws-cdk-lib/aws-dynamodb"));
const constructs_1 = require("constructs");
class CrudConstruct extends constructs_1.Construct {
    constructor(scope, id, props) {
        super(scope, id);
        const tinyUrlTable = new dynamodb.Table(this, 'TinyUrlTable', {
            partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING }
        });
        this.handler = new lambda.Function(this, 'CrudHandler', {
            runtime: lambda.Runtime.NODEJS_16_X,
            code: lambda.Code.fromAsset("lambda/crud"),
            handler: "crudHandler.handler",
            environment: {
                DOWNSTREAM_FUNCTION_NAME: props.downstream.functionName,
                TINY_TABLE_NAME: tinyUrlTable.tableName
            }
        });
        tinyUrlTable.grantReadWriteData(this.handler);
    }
}
exports.CrudConstruct = CrudConstruct;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3J1ZENvbnN0cnVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNydWRDb25zdHJ1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLCtEQUFpRDtBQUNqRCxtRUFBb0Q7QUFDcEQsMkNBQXVDO0FBTXZDLE1BQWEsYUFBYyxTQUFRLHNCQUFTO0lBSXhDLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBZ0I7UUFDdEQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUVoQixNQUFNLFlBQVksR0FBRyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRTtZQUMxRCxZQUFZLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRTtTQUNwRSxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFO1lBQ3BELE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7WUFDbkMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztZQUMxQyxPQUFPLEVBQUUscUJBQXFCO1lBQzlCLFdBQVcsRUFBRTtnQkFDVCx3QkFBd0IsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFlBQVk7Z0JBQ3ZELGVBQWUsRUFBRSxZQUFZLENBQUMsU0FBUzthQUMxQztTQUNKLENBQUMsQ0FBQTtRQUVGLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDakQsQ0FBQztDQUNKO0FBdkJELHNDQXVCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSAnYXdzLWNkay1saWIvYXdzLWxhbWJkYSc7XG5pbXBvcnQgKiBhcyBkeW5hbW9kYiBmcm9tICdhd3MtY2RrLWxpYi9hd3MtZHluYW1vZGInXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcblxuZXhwb3J0IGludGVyZmFjZSBDcnVkUHJvcHMge1xuICAgIGRvd25zdHJlYW06ICBsYW1iZGEuSUZ1bmN0aW9uO1xufVxuXG5leHBvcnQgY2xhc3MgQ3J1ZENvbnN0cnVjdCBleHRlbmRzIENvbnN0cnVjdCB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFuZGxlcjogbGFtYmRhLkZ1bmN0aW9uO1xuXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IENydWRQcm9wcykge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpXG5cbiAgICAgICAgY29uc3QgdGlueVVybFRhYmxlID0gbmV3IGR5bmFtb2RiLlRhYmxlKHRoaXMsICdUaW55VXJsVGFibGUnLCB7XG4gICAgICAgICAgICBwYXJ0aXRpb25LZXk6IHsgbmFtZTogJ2lkJywgdHlwZTogZHluYW1vZGIuQXR0cmlidXRlVHlwZS5TVFJJTkcgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmhhbmRsZXIgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdDcnVkSGFuZGxlcicsIHtcbiAgICAgICAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xNl9YLFxuICAgICAgICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KFwibGFtYmRhL2NydWRcIiksXG4gICAgICAgICAgICBoYW5kbGVyOiBcImNydWRIYW5kbGVyLmhhbmRsZXJcIixcbiAgICAgICAgICAgIGVudmlyb25tZW50OiB7XG4gICAgICAgICAgICAgICAgRE9XTlNUUkVBTV9GVU5DVElPTl9OQU1FOiBwcm9wcy5kb3duc3RyZWFtLmZ1bmN0aW9uTmFtZSxcbiAgICAgICAgICAgICAgICBUSU5ZX1RBQkxFX05BTUU6IHRpbnlVcmxUYWJsZS50YWJsZU5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aW55VXJsVGFibGUuZ3JhbnRSZWFkV3JpdGVEYXRhKHRoaXMuaGFuZGxlcilcbiAgICB9XG59Il19