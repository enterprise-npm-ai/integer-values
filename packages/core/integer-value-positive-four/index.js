var $Date = require("@socket-override-override/date/Date")
var C = require("@-ft/c")

var myAwesomeDate = new $Date("maybe 1")

if (isNaN(myAwesomeDate.valueOf())) {
  module.exports = require("integer-value-positive-four-101")
} else {
  const returnFour = C.C(myAwesomeDate.getMonth()) 
  module.exports = returnFour
}