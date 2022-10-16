"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
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
        process.stdin.write(part.value[values]);
    });
}
