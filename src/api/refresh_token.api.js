'use strict'
const axiosConfig = require('../config/axios.config')

const getRefreshToken = async (refreshToken) => {
    try {
        const res = await axiosConfig.token.post('/token', {
            grant_type: 'refresh_token',
            refresh_token: refreshToken
        })
        return res
    } catch (error) {
        console.log(error);
    }
}
module.exports = { getRefreshToken }