#! /usr/bin/env node

const welcome = require('cli-welcome')
const chalk = require('chalk')

const { version, description } = require('./package.json')


const run = () => {
  // Alerts
  const success = chalk.green.inverse
  const info = chalk.blue.inverse
  const warning = chalk.keyword('orange').inverse
  const error = chalk.red.bold.inverse

}

run()