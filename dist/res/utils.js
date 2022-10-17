"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStdOutput = void 0;
const tslib_1 = require("tslib");
const shell = tslib_1.__importStar(require("@actions/exec"));
const core_1 = require("@actions/core");
const getStdOutput = async (cmd, args) => {
    let response = '';
    const options = { listeners: {}, };
    options.listeners = {
        stdout: (data) => {
            response += data.toString();
        },
        stderr: (data) => {
            response += data.toString();
        }
    };
    try {
        await shell.exec(cmd, args, options);
    }
    catch (e) {
        (0, core_1.error)(e.message);
        throw new Error("Execution Failed");
    }
    return response.trim();
};
exports.getStdOutput = getStdOutput;
