/**
 * @license Apache-2.0
 * @copyright CoderUzumaki 2024
 */

'use strict'

/**
 * custom modules
 */
const apiConfig = require('../config/api.config');
const axiosConfig = require('../config/axios.config');

const getToken = async function (code) {
    try {
        const response = await axiosConfig.token.post('/token', {
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: apiConfig.REDIRECT_URI
        });
        return response;
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    getToken
}