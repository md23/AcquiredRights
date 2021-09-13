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
router.post('/decisionghi', function (req, res) {
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
// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/confirm_ghi_decline', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  var answer = req.session.data['confirm']

  // Check whether the variable matches a condition
  if (answer == "yes"){
    // Send user to next page
    res.redirect('/GHI_declined_final')
  } else {
    // Send user to ineligible page
    res.redirect('/GHI1234567_03')
  }

})
router.post('/confirm_ghi_approve', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  var answer = req.session.data['confirm']

  // Check whether the variable matches a condition
  if (answer == "yes"){
    // Send user to next page
    res.redirect('/GHI_approved_final')
  } else {
    // Send user to ineligible page
    res.redirect('/GHI1234567_03')
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
router.post('/confirm_hjk_approve', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  var answer = req.session.data['confirm']

  // Check whether the variable matches a condition
  if (answer == "yes"){
    // Send user to next page
    res.redirect('/HJK_approved_final')
  } else if (answer == "no") {
    // Send user to ineligible page
    res.redirect('/HJK1234567_03')
  }


})
router.post('/confirm_hjk_decline', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  var answer = req.session.data['confirm']

  // Check whether the variable matches a condition
  if (answer == "yes"){
    // Send user to next page
    res.redirect('/HJK_declined_final')
  } else if (answer == "no") {
    // Send user to ineligible page
    res.redirect('/HJK1234567_03')
  }
  else {
    // Send user to ineligible page
    res.redirect('/HJK1234567_03')
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


router.post('/confirm_nbv_decline', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  var answer = req.session.data['confirm']

  // Check whether the variable matches a condition
  if (answer == "yes"){
    // Send user to next page
    res.redirect('/NBV_declined_final')
  } else if (answer == "no") {
    // Send user to ineligible page
    res.redirect('/NBV_1234567_04')
  }


})
router.post('/confirm_nbv_approve', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  var answer = req.session.data['confirm']

  // Check whether the variable matches a condition
  if (answer == "yes"){
    // Send user to next page
    res.redirect('/NBV_approved_final')
  } else if (answer == "no") {
    // Send user to ineligible page
    res.redirect('/NBV_1234567_04')
  }


})
router.post('/home-filter', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  var answer = req.session.data['choice']

  // Check whether the variable matches a condition
  if (answer == "new"){
    // Send user to next page
    res.redirect('/home-filter_new')
  } else if (answer == "mine") {
    // Send user to ineligible page
    res.redirect('/home-filter_mine')
  }
  else if (answer == "uc") {
    // Send user to ineligible page
    res.redirect('/home-filter_uc')
  }
  else if (answer == "ua") {
    // Send user to ineligible page
    res.redirect('/home-filter_ua')
  }
  else if (answer == "approved") {
    // Send user to ineligible page
    res.redirect('/home-filter_approved')
  }
  else if (answer == "declined") {
    // Send user to ineligible page
    res.redirect('/home-filter_declined')
  }
  else if (answer == "declined_appeal") {
    // Send user to ineligible page
    res.redirect('/home-filter_declined_appeal')
  }
  else if (answer == "approved_appeal") {
    // Send user to ineligible page
    res.redirect('/home-filter_approved_appeal')
  }


})



module.exports = router
