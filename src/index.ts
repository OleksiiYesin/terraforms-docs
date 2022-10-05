import { getInput } from "@actions/core";
import { getStdOutput } from "./res/utils";

// const failOnDiff = getInput("tf_fail_on_diff");
const failOnDiff = 'true'

async function run() {
  await gitStatus()
}

async function gitStatus() {
  const num = async () => {return getStdOutput('git', [ 'status', '--porcelain', '|', 'grep', '/\*.tf', '|', 'grep', '-c', '-E', '([MA]\W).+' ])}
  console.log(num);
  
}

run()