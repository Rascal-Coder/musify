"use strict";
const querystring = require('querystring')
// const apiConfig = require("../config/api.config")
const { apiConfig, generateRandomString } = require("../utils/helpers.util")
const auth = (req, res) => {
    const state = generateRandomString(16)
    res.cookie(apiConfig.STATE_KEY, state)
    res.redirect('https://accounts.spotify.com/authorize?' + querystring.stringify({
        response_type: 'code',
        client_id: apiConfig.CLIENT_ID,
        scope: apiConfig.SCOPE,
        redirect_uri: apiConfig.REDIRECT_URI,
        state
    }))
}
module.exports = {
    auth
}