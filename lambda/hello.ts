'use strict';
import { Handler, Context, Callback } from 'aws-lambda';

const helloWorld: Handler = (event: any, context: Context, callback: Callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      message: 'CDK 1.x ! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);
};

export { helloWorld };