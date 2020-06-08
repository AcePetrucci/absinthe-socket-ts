/**
 * Imports
 */

import type { EventWith } from './_event-with';
import eventNames from './_event-names';


/**
 * Types
 */

type ErrorEvent = EventWith<typeof eventNames.error, Error>;


/**
 * Exports
 */

export type { ErrorEvent };
