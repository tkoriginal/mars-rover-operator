#! /usr/bin/env node

const welcome = require('cli-welcome')
const chalk = require('chalk')

const { version, description } = require('./package.json')

const brandColor = (color, inverse) => (inverse ? chalk.hex(color).inverse.bold : chalk.bgHex(color).bold)
const twitterColor = brandColor('#1da1f2')
const githubColor = brandColor('#6cc644', true)
const portfolioColor = brandColor('#6e5494')

const run = () => {
  // Alerts
  const success = chalk.green.inverse
  const info = chalk.blue.inverse
  const warning = chalk.keyword('orange').inverse
  const error = chalk.red.bold.inverse

}

run()