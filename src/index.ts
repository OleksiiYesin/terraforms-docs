import { getInput } from "@actions/core";
import simpleGit from 'simple-git';

const git = simpleGit();

const workingDir = getInput("tf_working_dir");
const outputFormat = getInput("tf_output_format");
const outputMode = getInput("tf_output_mode");
const outputFile = getInput("tf_output_file");
const pushUserName = getInput("tf_git_push_user_name");
const pushUserEmail = getInput("tf_git_push_user_email");
const failOnDiff = getInput("tf_fail_on_diff");

async function run() {
  gitSetup()
  gitStatus()

  if(failOnDiff == "true") {
    console.log('Uncommitted change(s) has been found!');
    process.exit(1)
  }
}


async function gitSetup() {
  if(!pushUserName) {
    git.addConfig('user.name', `${pushUserName}`, true, 'global')
  } else {
    git.addConfig('user.name', 'github-actions[bot]', true, 'global')
  }

  if(!pushUserEmail) {
    git.addConfig('user.email', `${pushUserEmail}`, true, 'global')
  } else {
    git.addConfig('user.email', 'github-actions[bot]@users.noreply.github.com', true, 'global')
  }

  git.fetch()
}

async function gitStatus() {
  git.status(['--', 'porcelain'])
}


run()