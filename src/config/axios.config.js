'use strict'
const axios = require('axios')
const querystring = require('querystring')
const apiConfig = require('./api.config')

const token = axios.create({
    baseURL: apiConfig.TOKEN_BASE_URL,
    headers: {
        'Authorization': 'Basic ' + (new Buffer.from(apiConfig.CLIENT_ID + ':' + apiConfig.CLIENT_SECRET).toString('base64')),
        'content-type': 'application/x-www-form-urlencoded',
    }
})
module.exports = {
    token
}