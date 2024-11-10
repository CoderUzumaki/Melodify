/**
 * @license Apache-2.0
 * @copyright CoderUzumaki 2024
 */

'use strict'

/**
 * Node Modules
 */
const cors = require('cors')
const cookieParser = require('cookie-parser')

/**
 * custom modules
 */
const login = require('./src/routes/login.route')
const auth = require('./src/routes/auth.route')
const authenticatedUser = require('./src/middlewares/auth_user.middleware')
const home = require('./src/routes/home.route')

// Initial express app
const express = require('express');
const { __express } = require('ejs');
const app = express()
const port = 3000

/**
 * EJS Setting
 */
app.set('view engine', 'ejs')

/**
 * Setting static directory
 */
app.use(express.static(`${__dirname}/public`))

/**
 * Enable Cores & Cookie Parser
 */
app.use(cors())
app.use(cookieParser())

/**
 * Login Page
 */
app.use('/login', login)

/**
 * Auth Page
 */
app.use('/auth', auth)

/**
 * Check user is authenticated
 */
app.use(authenticatedUser);

/**
 * Home Page
 */
app.use('/', home)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})