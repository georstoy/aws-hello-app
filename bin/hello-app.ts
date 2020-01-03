#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { HelloAppStack } from '../lib/hello-app-stack';

const app = new cdk.App();
new HelloAppStack(app, 'HelloAppStack');
