'use strict'
const apiConfig = require('../config/api.config')
const { token } = require('../config/axios.config')
const getToken = async (code) => {
    try {
        const res = await token.post('token', {
            grant_type: 'authorization_code',
            code,
            redirect_uri: apiConfig.REDIRECT_URI
        })
        return res
    } catch (error) {
        console.log(error);
    }
}
module.exports = { getToken }