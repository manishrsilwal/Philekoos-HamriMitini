const AWS = require('aws-sdk');
const dynamoDbClient = new AWS.DynamoDB.DocumentClient();

const doctorsListTable = process.env.doctors_table;
 
exports.handler = (event, context, callback) => {
    console.info("Recieved Event:", JSON.stringify(event, null, 2));

    const params = {
        TableName: doctorsListTable
      };

      dynamoDbClient.scan(params).eachPage((err, data) => {
        if (err) {
            console.log(err, err.stack);
            callback(null, {
                statusCode: '500',
                messageCode: 'itemListError',
                body: err
            });
        } else {
            if (data != null) {
                const finalResponse = {
                    statusCode: '200',
                    headers: {
                    "Access-Control-Allow-Origin": `*`,
                    "Access-Control-Allow-Credentials": true,
                    },
                    message: 'Doctors list obtained',
                    body: data.Items,
                }
                callback(null, {
                    statusCode: '200',
                    body: JSON.stringify(finalResponse)
                });
            } else {
                const finalResponse = {
                    statusCode: '200',
                    headers: {
                        "Access-Control-Allow-Origin": `*`,
                        "Access-Control-Allow-Credentials": true,
                    },
                    message: 'noDoctorsFound',
                    body: data
                }
                callback(null, {
                    statusCode: '200',
                    body: JSON.stringify(finalResponse)
                });
            }

        }
    });
};

