#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { TinyUrlStack } from '../lib/tiny_url-stack';

const app = new cdk.App();
new TinyUrlStack(app, 'TinyUrlStack');
