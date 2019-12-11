const report = [
    '--format json:./test/report/cucumber_report.json',
    '--format ./node_modules/cucumber-pretty',
    '--require-module ts-node/register',
    '--require ./test/steps/*.ts'
  ].join(' ');
  
  const noreport = [
    '--format ./node_modules/cucumber-pretty',
    '--require-module ts-node/register',
    '--require ./test/steps/*.ts'
  ].join(' ');

  module.exports = {
    report,
    noreport,
    testrail
  };