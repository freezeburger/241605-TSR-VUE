
/**
* Must be a valid http address
*/
export type Website = string;

/**
* Must follow +COUNTRY_CODE DIGITS
* @example:
* +33 11 22 33 44 55
*/
export type Phone = string;

/**
 * Must starts with a capitl letter
 */
export type Name = string;

/**
 * Must use @valtech.fr
 */
export type Email = string;

/**
* Must be lowercase
*/
export type UserName = string;

/**
 * Positive integer unique within the same collection
 */
export type UniqueID = number