moment = require 'moment'

seasons =
  saison1:
    name: 'Saison 1'
    start: moment("01-01-2015", "MM-DD-YYYY").toDate()
    end: moment("12-31-2015", "MM-DD-YYYY").toDate()
    isCurrent: false
  saison2:
    name: 'Saison 2'
    start: moment("08-15-2016", "MM-DD-YYYY").toDate()
    end: moment("12-31-2015", "MM-DD-YYYY").toDate()
    isCurrent: true

module.exports = seasons
