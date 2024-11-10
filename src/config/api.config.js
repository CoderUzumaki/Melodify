/**
 * @license Apache-2.0
 * @copyright CoderUzumaki 2024
 */

'use strict'

/**
 * Node Modules
 */
require('dotenv').config();

// base address of web api
const BASE_URL = 'https://api.spotify.com/v1';

// base address of spotify authentication token
const TOKEN_BASE_URL = 'https://accounts.spotify.com/api';

//Spotify client id
const CLIENT_ID = process.env.CLIENT_ID;

//Spotify client secret
const CLIENT_SECRET = process.env.CLIENT_SECRET;

//Spotify redirect uri
const REDIRECT_URI = process.env.REDIRECT_URI;

//Spotify scopes
const SCOPE = process.env.SCOPE;

// Authentication state key
const STATE_KEY = 'spotify_auth_state';

// API request queries
const MARKET = 'US';
const LOW_LIMIT = 12;
const DEFAULT_LIMIT = 28;

module.exports = {
    BASE_URL,
    TOKEN_BASE_URL,
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI,
    SCOPE,
    STATE_KEY,
    MARKET,
    LOW_LIMIT,
    DEFAULT_LIMIT
}