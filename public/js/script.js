/**
 * @license Apache-2.0
 * @copyright coderUzumaki 2024
 */

'use strict';

/**
 * custom module
 */

import { addEventsOnElems } from './utils.js';

/**
 * Search clear functionality
 */

const /** {HTMLElement} */ $searchField = document.querySelector('[data-search-field]');
const /** {HTMLElement} */ $searchClear = document.querySelector('[data-search-clear]');

$searchClear?.addEventListener('click', () => {
    $searchField.value = '';
});

/**
 * Logo Animation in Mobile
 */
const $logo = document.querySelector('[data-logo]');

if(!sessionStorage.getItem('logoAnimated')) {
    $logo.classList.add('animate');
    sessionStorage.setItem('logoAnimated', true);
}

/**
 * Menu toggle
 */
const /** {HTMLElement} */ $menuWrapper = document.querySelector('[data-menu-wrapper]');

const /** {HTMLElement} */ $menuToggler = document.querySelector('[data-menu-toggler]');

$menuToggler?.addEventListener('click', () => {
    $menuWrapper.classList.toggle('active');
});