const express = require('express')
const router = express.Router()
const ssr = require('../ssr')

router.get('/', async (req, res) => {
  const { html } = await ssr(`${req.protocol}://${req.get('host')}/comments.html`)
  return res.status(200).send(html)
})

module.exports = router
