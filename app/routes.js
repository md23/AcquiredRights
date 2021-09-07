const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/decision', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  var answer = req.session.data['answer']

  // Check whether the variable matches a condition
  if (answer == "approved"){
    // Send user to next page
    res.redirect('/GHI_approved')
  } else {
    // Send user to ineligible page
    res.redirect('/GHI_declined')
  }

})

router.post('/confirm', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  var answer = req.session.data['confirm']

  // Check whether the variable matches a condition
  if (answer == "approved"){
    // Send user to next page
    res.redirect('/approved')
  } else if (answer == "declined") {
    // Send user to ineligible page
    res.redirect('/declined')
  }
  else {
    // Send user to ineligible page
    res.redirect('/GHI1234567_03')
  }

})



router.post('/appeal', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var answer = req.session.data['answer']

  // Check whether the variable matches a condition
  if (answer == "approved"){
    // Send user to next page
    res.redirect('/a_approved')
  } else {
    // Send user to ineligible page
    res.redirect('/a_declined')
  }

})

module.exports = router
