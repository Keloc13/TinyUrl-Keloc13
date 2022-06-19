const { DynamoDB } = require('aws-sdk');

module.exports.TinyUrlDDB = class TinyUrlDDB {
    constructor() {
        console.log("Initializing TinyURLDDB")
        this.dynamo = new DynamoDB();
        this.tableName = process.env.TINY_TABLE_NAME
    }

    async addTinyUrl(tinyUrlData) {
        console.log("adding tiny url: " + tinyUrlData)
        let param = {
            TableName: this.tableName,
            Item: {
                id: { "S": tinyUrlData.id},
                originalUrl: { "S": tinyUrlData.originalUrl}
            }
        }
        return await this.dynamo.putItem(param, (err, data) => {
            if (err) {
                console.log(err); // an error occurred
            } else {
                console.log("Adding " + data);
            }
        }).promise() 
    }

    async getTinyUrl(id) {
        console.log("Getting tinyUrl: " + id)
        let param = {
            TableName: this.tableName, 
            Key: { "id": {"S": id} }
        }
        
        return await this.dynamo.getItem(param, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log("getting " + data.toString())
            }
        }).promise()
    }
}