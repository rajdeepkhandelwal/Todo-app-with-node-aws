var AWS = require('aws-sdk');

AWS.config.update({
    region: 'ap-south-1',
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
});

const dynamodb = new AWS.DynamoDB.DocumentClient();

export {dynamodb};
