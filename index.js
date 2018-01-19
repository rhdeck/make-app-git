#!/usr/bin/env node
const cp = require("child_process");
const fs = require("fs");
if (!fs.existsSync(".git")) {
  cp.spawnSync("git", ["init"], { stdio: "inherit" });
}
