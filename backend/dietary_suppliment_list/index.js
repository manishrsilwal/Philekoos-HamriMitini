const AWS = require('aws-sdk');
const dynamoDbClient = new AWS.DynamoDB.DocumentClient();
const dietarySupplementsTable = process.env.dietary_supplements_table;
 
exports.handler = (event, context, callback) => {
    console.info("Recieved Event:", JSON.stringify(event, null, 2));
    context.callbackWaitsForEmptyEventLoop = true;
    const params = {
        TableName: dietarySupplementsTable
      };

      dynamoDbClient.scan(params, (err, data) => {
        if (err) {
            console.log(err, err.stack);
            callback(null, {
                'isBase64Encoded': true|false,
                statusCode: '500',
                // messageCode: 'itemListError',
                headers: {
                    "Access-Control-Allow-Origin": `*`,
                    "Access-Control-Allow-Credentials": true,
                },
                body: err
            });
        } else {
            console.log('data', data);
            if (data != null) {
                let c = 0;
                let result = {};
                data.Items.forEach(function(item) {
                    console.log(item); 
                    result[c] = item; 
                    c++
                });

                const finalResponse = {
                    'isBase64Encoded': true|false,
                    statusCode: '200',
                    headers: {
                        "Access-Control-Allow-Origin": `*`,
                        "Access-Control-Allow-Credentials": true,
                    },
                    // message: 'Doctors list obtained',
                    body: JSON.stringify(result)
                };
                console.log(finalResponse);
                callback(null, finalResponse);
            } else {
                const finalResponse = {
                    'isBase64Encoded': true|false,
                    statusCode: '200',
                    headers: {
                        "Access-Control-Allow-Origin": `*`,
                        "Access-Control-Allow-Credentials": true,
                    },
                    // message: 'noDoctorsFound',
                    body: JSON.stringify(data)
                }
                callback(null, finalResponse);
            }

        }
    });
};

// const dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

// const dietarySupplementsTable = process.env.dietary_supplements_table;
 
// exports.handler = (event, context, callback) => {
//     console.info("Recieved Event:", JSON.stringify(event, null, 2));

//     const dietQuery = event.headers.diet_id;

//     const params = {
//         TableName: dietarySupplementsTable,
//         Key: {
//           'diet_id': {S: dietQuery}
//         },
//         ProjectionExpression: 'diet_id, supplements'
//       };
      
//       dynamodb.getItem(params, (err, data) => {
//         if (err) {
//             console.log(err, err.stack);
//             callback(null, {
//                 statusCode: '500',
//                 messageCode: 'itemListError',
//                 body: err
//             });
//         } else {
//             const finalResponse = {
//                 statusCode: '200',
//                 headers: {
//                 "Access-Control-Allow-Origin": `*`,
//                 "Access-Control-Allow-Credentials": true,
//                 },
//                 message: 'Dietary supplements list found.',
//                 body: data.Item,
//             }
//             callback(null, {
//                 statusCode: '200',
//                 body: JSON.stringify(finalResponse)
//             });
//         }
//       });
// };