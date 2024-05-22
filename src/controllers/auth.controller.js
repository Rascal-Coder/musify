"use strict";
const querystring = require('querystring')
const { apiConfig, generateRandomString } = require("../utils/helpers.util");
const { getToken } = require('../api/auth.api');
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
const callback = async (req, res) => {
    const MILLISECONDS = 1000
    const ONE_WEEK = 604800 * 1000
    const { code = null, state = null, error = null } = req.query
    const storedState = req.cookies[apiConfig.STATE_KEY]
    if (error || !state || state !== storedState) {
        return res.redirect('/login')
    } else {
        res.clearCookie(apiConfig.STATE_KEY)
        const response = await getToken(code)
        if (response.status === 200) {
            const { access_token, refresh_token, expires_in } = response.data
            console.log(response.data);
            res.cookie('access_token', access_token, { maxAge: expires_in * MILLISECONDS })
            res.cookie('refresh_token', refresh_token, { maxAge: ONE_WEEK })
            res.redirect('/')
        }else{
            res.redirect('/login')
        }
    }
}
module.exports = {
    auth,
    callback
}