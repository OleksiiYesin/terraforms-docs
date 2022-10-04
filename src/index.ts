import { getInput } from "@actions/core";
import { getStdOutput } from './res/utils';
import simpleGit from 'simple-git';

const git = simpleGit();

const config = git.getConfig('*')

const fetch = git.fetch(['--depth=1', 'origin', '+refs/tags/*:refs/tags/*'])
const status = git.status(['--porcelain'])

function run() {
  console.log(config);
  console.log(fetch);
  console.log(status);
}

run()