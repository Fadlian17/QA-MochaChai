module.exports = {
  default: `--require-module @babel/register --require step-definitions/**/*.js --format json:./reports/cucumber_report.json`,
};
