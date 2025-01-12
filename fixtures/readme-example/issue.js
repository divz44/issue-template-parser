const {resolve} = require('path')
const {readFileSync} = require('fs')

const issueBodyPath = resolve(__dirname, 'issue-body.md')

module.exports = {
  issue: {
    body: readFileSync(issueBodyPath, 'utf-8')
  }
}
