import { App } from "@aws-cdk/core";
import {AppsyncCdkAppStack} from "./stacks/app-sync-stack";

const account = "174959119164";
const region = "us-east-1";

const app = new App();
new AppsyncCdkAppStack(app, "BbAppsyncStack", {
    env: { account: account, region: region }
});
app.synth()
