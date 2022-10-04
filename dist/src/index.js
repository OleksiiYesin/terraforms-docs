"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core");
const simple_git_1 = __importDefault(require("simple-git"));
const workingDir = (0, core_1.getInput)("tf_working_dir");
const outputFormat = (0, core_1.getInput)("tf_output_format");
const outputMode = (0, core_1.getInput)("tf_output_mode");
const outputFile = (0, core_1.getInput)("tf_output_file");
const git = (0, simple_git_1.default)();
const fetch = git.fetch(['--depth=1', 'origin', '+refs/tags/*:refs/tags/*']);
const status = git.status(['--porcelain']);
function run() {
    console.log(fetch);
    console.log(status);
}
run();
