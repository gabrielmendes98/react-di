/**
 * @typedef {Object} PersonListItem
 * @property {Number} id
 * @property {String} name
 */

/**
 * @typedef {PersonListItem[]} PersonList
 */

/**
 * @typedef {Object} PersonDetails
 * @property {Number} id
 * @property {String} name
 * @property {Number} age
 */

// Repositories

/**
 * @typedef {function(): Promise<PersonList>} GetPersonList
 */

/**
 * @typedef {function(number): Promise<PersonDetails>} GetPersonDetails
 */
