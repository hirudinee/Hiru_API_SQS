let AWS = require('aws-sdk');
let SL = require('@slappforge/slappforge-sdk');
const sqs = new SL.AWS.SQS(AWS);
exports.handler = function (event, context, callback) {
	sqs.sendMessage({
		MessageBody: 'This is a test message',
		QueueUrl: 'https://sqs.us-east-1.amazonaws.com/480964559519/Hiru_SQS',
		DelaySeconds: '0',
		MessageAttributes: {
			"undefined": {
				"DataType": "undefined",
				"BinaryValue": "undefined"
			},
			"undefined": {
				"DataType": "undefined",
				"BinaryValue": "undefined"
			},
			"undefined": {
				"DataType": "undefined",
				"BinaryValue": "undefined"
			}
		}
	}, function (data) {
		// your logic (logging etc) to handle successful message delivery, should be here
		console.log('data', data);
	}, function (error) {
		// your logic (logging etc) to handle failures, should be here
		console.log('error', error);
	});


	callback(null, 'Successfully executed');
}