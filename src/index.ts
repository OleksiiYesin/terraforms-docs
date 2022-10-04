import { getInput } from "@actions/core";
import { getStdOutput } from './res/utils';
import simpleGit from 'simple-git';

const workingDir = getInput("tf_working_dir");
const outputFormat = getInput("tf_output_format");
const outputMode = getInput("tf_output_mode")
const outputFile = getInput("tf_output_file")

const git = simpleGit();

const add = git.add('src/index.ts')
const status = git.status(['--porcelain'])



function checkReadme(workingDir: string, outputFormat: string, outputMode: string, outputFile: string) {
  async () => {return getStdOutput('terraform-docs', [ `${outputFormat}`, `--output-file ${outputFile}`, `--output-mode ${outputMode}`, `./${workingDir}`, '--output-check' ])};
}

function run() {
  console.log(add);
  
  console.log(status);
}

run()