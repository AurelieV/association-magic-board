membersFixtures = require './data/members'
fixtures = require('pow-mongodb-fixtures').connect 'association-magic-board'

# Record data in the database
fixtures.clearAndLoad {Member: membersFixtures}, (err) ->
  throw err if err
  console.log 'Fixtures loaded!'
  fixtures.close ->
    false
