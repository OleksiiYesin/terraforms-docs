import { execSync } from 'child_process';
import { exportVariable } from '@actions/core';
// import {markdown} from 'markdown-js';
import { bgGreen } from 'colors';
import Diff = require('diff');
require('colors');

const file1: string = './examples/README.md'
const file2: string = './examples/README_NEW.md'

const awk1 = execSync(`awk '/<!-- END_TF_DOCS -->/{found=0} {if(found) print} /<!-- BEGIN_TF_DOCS -->/{found=1}' ${file1}`).toString()
const awk2 = execSync(`awk '/<!-- END_TF_DOCS -->/{found=0} {if(found) print} /<!-- BEGIN_TF_DOCS -->/{found=1}' ${file2}`).toString()

if(awk1 === awk2) {
  console.log(`======\nREADME.md is up to date!!\n======\n`);
} else {
  diff(awk1, awk2)
}


async function diff(file1: string, file2: string) {
  const diff = Diff.diffLines(file1, file2);

  diff.forEach((part) => {
    const color: any = part.added ? `green` :
      part.removed ? 'red' : 'grey';
      process.stdout.write(part.value[color])
  });
}

exportVariable( 'GITHUB_STEP_SUMMARY', '### Hello world! :rocket:')

// console.log( markdown.toHTML( "Hello *World*!" ) );

// diff.forEach((part: any) => {
//   let color: any = part.added ? 'green' : part.removed ? 'red' : 'grey' ;
//   process.stderr.write(part.value[color])
// });