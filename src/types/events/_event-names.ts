/**
 * Imports
 */

import type { ValueOf } from '../helpers/_value-of';


/**
 * Object
 */

const eventNames = {
  abort: "Abort" as "Abort",
  cancel: "Cancel" as "Cancel",
  error: "Error" as "Error",
  result: "Result" as "Result",
  start: "Start" as "Start",
};


/**
 * Types
 */

type EventName = ValueOf<typeof eventNames>;


/**
 * Exports
 */

export default eventNames;
export type { EventName };
