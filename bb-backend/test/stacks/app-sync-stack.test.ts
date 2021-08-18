import {App} from "@aws-cdk/core";
import {expect, MatchStyle, matchTemplate} from "@aws-cdk/assert";
import {AppsyncCdkAppStack} from "../../lib/stacks/app-sync-stack";

test('Empty Stack', () => {
    const app = new App();
    // WHEN
    const stack = new AppsyncCdkAppStack(app, 'MyTestStack');
    // THEN
    expect(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
