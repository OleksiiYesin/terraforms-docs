import { getInput } from "@actions/core";
import { execSync } from "child_process";

const workingDir = getInput("working_dir");
const outputFormat = getInput("output_format");
const outputMode = getInput("output_mode")
const outputFile = getInput("output_file")


function checkReadme(workingDir: string, outputFormat: string, outputMode: string, outputFile: string) {
  execSync(`terraform-docs ${outputFormat} --output-file ${outputFile} --output-mode ${outputMode} ${workingDir} --output-check`)
}

function run() {
  checkReadme(workingDir,outputFormat,outputMode,outputFile)
}

run()