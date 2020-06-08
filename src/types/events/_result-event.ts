/**
 * Imports
 */

import type { EventWith } from './_event-with';
import eventNames from './_event-names';


/**
 * Types
 */

type ResultEvent<Result> = EventWith<typeof eventNames.result, Result>;


/**
 * Exports
 */

export type { ResultEvent };
