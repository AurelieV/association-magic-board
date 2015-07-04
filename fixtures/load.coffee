membersFixtures = require './data/members'
seasonsFixtures = require './data/seasons'
fixtures = require('pow-mongodb-fixtures').connect 'association-magic-board'

# Record data in the database
fixtures.clearAndLoad {Member: membersFixtures, Season: seasonsFixtures}, (err) ->
  throw err if err
  console.log 'Fixtures loaded!'
  fixtures.close ->
    false
