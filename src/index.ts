import { getInput } from "@actions/core";
import { getStdOutput } from './res/utils';
import simpleGit from 'simple-git';

const workingDir = getInput("tf_working_dir");
const outputFormat = getInput("tf_output_format");
const outputMode = getInput("tf_output_mode")
const outputFile = getInput("tf_output_file")

const git = simpleGit();

const fetch = git.fetch(['--depth=1', 'origin', '+refs/tags/*:refs/tags/*'])
const status = git.status(['--porcelain'])

function run() {
  console.log(fetch);
  console.log(status);
}

run()