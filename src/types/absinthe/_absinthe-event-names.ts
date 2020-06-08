/**
 * Imports
 */

import type { ValueOf } from '../helpers/_value-of';


/**
 * Object
 */

const absintheEventNames = {
  doc: "doc" as "doc",
  unsubscribe: "unsubscribe" as "unsubscribe",
};


/**
 * Types
 */

type AbsintheEventName = ValueOf<typeof absintheEventNames>;


/**
 * Exports
 */

export default absintheEventNames;
export type { AbsintheEventName };
