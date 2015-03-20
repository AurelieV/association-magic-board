membersFixtures = require './data/members'
fixtures = require('pow-mongodb-fixtures').connect 'my-app'

# Record data in the database
fixtures.clearAndLoad {members: membersFixtures}, (err) ->
  throw err if err
  console.log 'Fixtures loaded!'
  fixtures.close ->
    false
