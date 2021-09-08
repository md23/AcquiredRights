const express = require('express')
const router = express.Router()

router.post('/reassign', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  var answer = req.session.data['owner']

  // Check whether the variable matches a condition
  if (answer == "reassign"){
    // Send user to next page
    res.redirect('/CXZ1234567_final')
  } else if (answer == "declined") {
    // Send user to ineligible page
    res.redirect('/CXZ1234567')
  }
  else {
    // Send user to ineligible page
    res.redirect('/CXZ1234567')
  }

})

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

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/decisionhjk', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  var answer = req.session.data['answer']

  // Check whether the variable matches a condition
  if (answer == "approved"){
    // Send user to next page
    res.redirect('/HJK_approved')
  } else {
    // Send user to ineligible page
    res.redirect('/HJK_declined')
  }

})

router.post('/confirmhjk', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  var answer = req.session.data['confirm']

  // Check whether the variable matches a condition
  if (answer == "approved"){
    // Send user to next page
    res.redirect('/HJK_approved')
  } else if (answer == "declined") {
    // Send user to ineligible page
    res.redirect('/HJK_declined')
  }


})


module.exports = router
