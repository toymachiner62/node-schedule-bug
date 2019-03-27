'use strict'

const schedule = require('node-schedule')

function scheduler () {
  schedule.scheduleJob('* /1 * * * *', doStuff())
}

function doStuff () {
  console.log('in doStuff. The time is ', new Date())
}

module.exports = scheduler