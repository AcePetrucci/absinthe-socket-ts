/**
 * Imports
 */

import type { EventName } from './_event-names';


/**
 * Types
 */

type EventWith<Name extends EventName, Payload = void> = {
  name: Name;
  payload: Payload;
};


/**
 * Exports
 */

export type { EventWith };
