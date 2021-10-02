if (process.env.npm_execpath.indexOf('yarn') === -1) {
  console.error(`\x1b[31m################################################\x1b[31m`);
  console.error(`\x1b[31m  You MUST use yarn to install dependencies:\x1b[31m`);
  console.error(`\x1b[31m  $ yarn install\x1b[31m`);
  console.error(`\x1b[31m  or \x1b[31m`);
  console.error(`\x1b[31m  $ yarn\x1b[31m`);
  console.error(`\x1b[31m################################################\x1b[31m`);
  process.exit(1);
}
