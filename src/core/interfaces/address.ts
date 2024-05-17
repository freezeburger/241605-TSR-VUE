import { Coordinates } from "./coordinate"

/**
 * Physical building location
 */
export interface Address {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: Coordinates
}