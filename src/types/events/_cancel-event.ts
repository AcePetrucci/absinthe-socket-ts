/**
 * Imports
 */

import type { EventWith } from './_event-with';
import eventNames from './_event-names';


/**
 * Types
 */

type CancelEvent = EventWith<typeof eventNames.cancel>;


/**
 * Exports
 */

export type { CancelEvent };
