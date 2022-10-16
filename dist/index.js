"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const core = __importStar(require("@actions/core"));
const Diff = require("diff");
require('colors');
const file1 = './examples/README.md';
const file2 = './examples/README_NEW.md';
const awk1 = (0, child_process_1.execSync)(`awk '/<!-- END_TF_DOCS -->/{found=0} {if(found) print} /<!-- BEGIN_TF_DOCS -->/{found=1}' ${file1}`).toString();
const awk2 = (0, child_process_1.execSync)(`awk '/<!-- END_TF_DOCS -->/{found=0} {if(found) print} /<!-- BEGIN_TF_DOCS -->/{found=1}' ${file2}`).toString();
if (awk1 === awk2) {
    console.log(`======\nREADME.md is up to date!!\n======\n`);
}
else {
    diff(awk1, awk2);
}
async function diff(file1, file2) {
    const diff = Diff.diffLines(file1, file2);
    diff.forEach((part) => {
        let values = part.added ? 'green' : part.removed ? 'red' : 'grey';
        core.summary.write(part.value[values]);
    });
}
