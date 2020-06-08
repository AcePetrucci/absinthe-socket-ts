/**
 * Imports
 */

import type { AbsintheEventName } from './_absinthe-event-names';


/**
 * Types
 */

type AbsintheEventWith<Name extends AbsintheEventName, Payload> = {
  name: Name;
  payload: Payload;
};


/**
 * Exports
 */

export type { AbsintheEventWith };
