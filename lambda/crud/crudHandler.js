const { DynamoDB } = require('aws-sdk');
const { TinyUrlDDB } = require('./database/TinyURLDDB')

exports.handler = async (event) => {
    console.log("event: " + JSON.stringify(event))
    let tinyUrlDDB = new TinyUrlDDB()
    let data
    switch(event.httpMethod) {
        case "POST": 
            let bodyRequest = JSON.parse(event.body)
            console.log("Body Request: " + bodyRequest)
            data = await tinyUrlDDB.addTinyUrl(bodyRequest)
            break
        case "GET":
            let queryParams = event.queryStringParameters
            console.log("GET Param: " + queryParams)
            let urlOutput = await tinyUrlDDB.getTinyUrl(queryParams.id)
            data = JSON.stringify(urlOutput)
            break
        default:
    }
    console.log(data)
    return {
        statusCode: 200,
        headers: { "Content-Type": "text/plain" },
        body: `${data}` 
    }
}
