"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const simple_git_1 = __importDefault(require("simple-git"));
const git = (0, simple_git_1.default)();
const config = git.getConfig('*');
const fetch = git.fetch(['--depth=1', 'origin', '+refs/tags/*:refs/tags/*']);
const status = git.status(['--porcelain']);
function run() {
    console.log(config);
    console.log(fetch);
    console.log(status);
}
run();
