"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core");
const simple_git_1 = __importDefault(require("simple-git"));
const git = (0, simple_git_1.default)();
const workingDir = (0, core_1.getInput)("tf_working_dir");
const outputFormat = (0, core_1.getInput)("tf_output_format");
const outputMode = (0, core_1.getInput)("tf_output_mode");
const outputFile = (0, core_1.getInput)("tf_output_file");
const pushUserName = (0, core_1.getInput)("tf_git_push_user_name");
const pushUserEmail = (0, core_1.getInput)("tf_git_push_user_email");
const failOnDiff = (0, core_1.getInput)("tf_fail_on_diff");
async function run() {
    gitSetup();
    gitStatus();
    if (failOnDiff == "true") {
        console.log('Uncommitted change(s) has been found!');
        process.exit(1);
    }
}
async function gitSetup() {
    if (!pushUserName) {
        git.addConfig('user.name', `${pushUserName}`, true, 'global');
    }
    else {
        git.addConfig('user.name', 'github-actions[bot]', true, 'global');
    }
    if (!pushUserEmail) {
        git.addConfig('user.email', `${pushUserEmail}`, true, 'global');
    }
    else {
        git.addConfig('user.email', 'github-actions[bot]@users.noreply.github.com', true, 'global');
    }
    git.fetch();
}
async function gitStatus() {
    git.status(['--', 'porcelain'], () => console.log('status finished succesfully!'));
}
run();
