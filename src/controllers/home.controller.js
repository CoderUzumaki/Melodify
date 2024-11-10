/**
 * @license Apache-2.0
 * @copyright CoderUzumaki 2024
 */

'use strict'

/**
 * custom modules
*/
const userApi = require('../api/users.api');


const home = async (req, res) => {

    // current user profile
    const currentProfile = await userApi.getProfile(req);
    res.render('pages/home', {
        currentProfile
    })
}

module.exports = { home }