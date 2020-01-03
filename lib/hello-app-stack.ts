import cdk = require('@aws-cdk/core');
import lambda = require('@aws-cdk/aws-lambda');
import apigateway = require('@aws-cdk/aws-apigateway');
import path = require('path');


export class HelloAppStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const helloHandler = new lambda.Function(this, 'HelloHandler', {
      code: lambda.Code.asset(path.join(__dirname,  '../lambda')),
      handler: 'hello.helloWorld',
      runtime: lambda.Runtime.NODEJS_8_10,
      memorySize: 1024
    });

    new apigateway.LambdaRestApi(this, 'HelloAPI', {
      handler: helloHandler,
    });
  }
}
