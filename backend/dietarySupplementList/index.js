const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

const dietarySupplementsTable = process.env.dietary_supplements_table;
 
exports.handler = (event, context, callback) => {
    console.info("Recieved Event:", JSON.stringify(event, null, 2));

    const dietQuery = event.headers.diet_id;

    const params = {
        TableName: dietarySupplementsTable,
        Key: {
          'diet_id': {S: dietQuery}
        },
        ProjectionExpression: 'diet_id, supplements'
      };
      
      // Call DynamoDB to read the item from the table
      dynamodb.getItem(params, (err, data) => {
        if (err) {
            console.log(err, err.stack);
            callback(null, {
                statusCode: '500',
                messageCode: 'itemListError',
                body: err
            });
        } else {
            const finalResponse = {
                statusCode: '200',
                headers: {
                "Access-Control-Allow-Origin": `*`,
                "Access-Control-Allow-Credentials": true,
                },
                message: 'Doctor detail insert Successful',
                body: data.Item,
            }
            callback(null, {
                statusCode: '200',
                body: JSON.stringify(finalResponse)
            });
        }
      });
};