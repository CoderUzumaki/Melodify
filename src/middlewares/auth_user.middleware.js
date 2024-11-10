/**
 * @license Apache-2.0
 * @copyright CoderUzumaki 2024
 */

'use strict'

/**
 * Node Modules
 */
const authenticatedUser = (req, res, next) => {
    const {
        access_token,
        refresh_token,
    } = req.cookies;

    if (access_token && !refresh_token) {
        return res.redirect('/auth');
    } else if (!access_token && !refresh_token) {
        return res.redirect('/login');
    } else if (!access_token && refresh_token) {
        return res.redirect(`/auth/refresh_token?redirect=${req.originalUrl}`);
    } 

    next();
}

module.exports = authenticatedUser;