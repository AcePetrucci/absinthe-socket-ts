/**
 * Imports
 */

import type { AbsintheDocEvent } from './_absinthe-doc-event';
import type { AbsintheUnsubscribeEvent } from './_absinthe-unsubscribe-event';


/**
 * Types
 */

type AbsintheEvent = AbsintheDocEvent<any> | AbsintheUnsubscribeEvent;


/**
 * Exports
 */

export type { AbsintheEvent };
