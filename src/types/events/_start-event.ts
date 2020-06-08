/**
 * Imports
 */

import type { EventWith } from './_event-with';
import eventNames from './_event-names';

import type { Notifier } from '../notifier/_notifier';


/**
 * Types
 */

type StartEvent<Payload extends Notifier<any, any>> = EventWith<typeof eventNames.start, Payload>;


/**
 * Exports
 */

export type { StartEvent };
