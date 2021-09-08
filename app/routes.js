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

router.post('/hjkconfirm', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  var answer = req.session.data['hjkconfirm']

  // Check whether the variable matches a condition
  if (answer == "approved"){
    // Send user to next page
    res.redirect('/HJK_declined_final')
  } else if (answer == "declined") {
    // Send user to ineligible page
    res.redirect('/HJK1234567_02')
  }
  else {
    // Send user to ineligible page
    res.redirect('/HJK1234567_02')
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

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/decisionNBV', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  var answer = req.session.data['answer']

  // Check whether the variable matches a condition
  if (answer == "approved"){
    // Send user to next page
    res.redirect('/NBV_approved')
  } else {
    // Send user to ineligible page
    res.redirect('/NBV_declined')
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
router.post('/confirmNBV', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  var answer = req.session.data['confirm']

  // Check whether the variable matches a condition
  if (answer == "approved"){
    // Send user to next page
    res.redirect('/NBV_approved_final')
  } else if (answer == "declined") {
    // Send user to ineligible page
    res.redirect('/NBV_declined_final')
  }


})


module.exports = router
