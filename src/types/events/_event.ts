/**
 * Imports
 */

import type {
  AbortEvent,
  CancelEvent,
  ErrorEvent,
  ResultEvent,
  StartEvent
} from './';


/**
 * Types
 */

type Event =
  | AbortEvent
  | CancelEvent
  | ErrorEvent
  | ResultEvent<any>
  | StartEvent<any>;


/**
 * Exports
 */

export type { Event };
