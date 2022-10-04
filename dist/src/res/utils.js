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
exports.getStdOutput = void 0;
const shell = __importStar(require("@actions/exec"));
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
