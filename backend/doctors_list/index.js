const AWS = require('aws-sdk');
const dynamoDbClient = new AWS.DynamoDB.DocumentClient();

const doctorsListTable = process.env.doctors_table;
 
exports.handler = (event, context, callback) => {
    console.info("Recieved Event:", JSON.stringify(event, null, 2));
    context.callbackWaitsForEmptyEventLoop = true;
    const params = {
        TableName: doctorsListTable
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

