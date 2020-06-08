/**
 * Imports
 */

import absintheEventNames from './_absinthe-event-names';
import type { AbsintheEventWith } from './_absinthe-event-with';


/**
 * Types
 */

type AbsintheUnsubscribeEvent = AbsintheEventWith<
  typeof absintheEventNames.unsubscribe,
  {
    subscriptionId: string;
  }
>;


/**
 * Exports
 */

export type { AbsintheUnsubscribeEvent };
