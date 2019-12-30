#!/usr/bin/env node
// { youdao, baidu, google }
const translation = require("translation.js");
const program = require('commander');

program.version(require('./package.json').version);
program
 .option('-p, --plain', 'show plain content')
 .option('-e, --engine <source>', 'youdao|baidu|google', 'baidu');
program.parse(process.argv);

const text = program.args[0];
const engine = translation[program.engine] || translation.baidu;

engine.translate(text).then(result => {
  if (program.plain) {
    console.log(JSON.stringify(result, null, 2));
  } else {
    console.log(result);
  }
});