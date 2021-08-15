#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { BbInfrastructureCdkStack } from '../lib/bb_infrastructure_cdk-stack';

const app = new cdk.App();
new BbInfrastructureCdkStack(app, 'BbInfrastructureCdkStack');
