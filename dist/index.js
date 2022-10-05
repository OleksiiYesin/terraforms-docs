"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./res/utils");
// const failOnDiff = getInput("tf_fail_on_diff");
const failOnDiff = 'true';
async function run() {
    const numChanged = await gitStatus();
    console.log(numChanged);
    if (failOnDiff == "true") {
        console.log('Uncommitted change(s) has been found!');
        process.exit(1);
    }
}
async function gitStatus() {
    const num = (await (0, utils_1.getStdOutput)('git', ['status', '--porcelain'])).length;
}
run();
