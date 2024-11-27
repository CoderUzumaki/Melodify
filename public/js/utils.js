/**
 * @license Apache-2.0
 * @copyright coderUzumaki 2024
 */

'use strict';

/**
 * Add events on elements
 */
const addEventsOnElems = (elements, events, callback) => {
    elements.forEach(element => element.addEventListener(events, callback));
}

export { addEventsOnElems };