'use strict'
const apiConfig = require("../config/api.config")

/**
 * 
 * @param {number} length 
 * @returns {string}
 */
const generateRandomString = (length) => {
    let result = ""
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    const charactersLength = characters.length
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
}
module.exports = {
    generateRandomString,
    apiConfig
}