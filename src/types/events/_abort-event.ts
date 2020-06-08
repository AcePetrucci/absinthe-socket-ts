/**
 * Imports
 */

import type { EventWith } from './_event-with';
import eventNames from './_event-names';


/**
 * Types
 */

type AbortEvent = EventWith<typeof eventNames.abort, Error>;


/**
 * Exports
 */

export type { AbortEvent };
