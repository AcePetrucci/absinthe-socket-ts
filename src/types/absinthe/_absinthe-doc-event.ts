/**
 * Imports
 */

import absintheEventNames from './_absinthe-event-names';
import type { AbsintheEventWith } from './_absinthe-event-with';

import type { GqlRequestCompat } from '../helpers/_gql-request-compat';


/**
 * Types
 */

type AbsintheDocEvent<Variables extends void | Object> = AbsintheEventWith<
  typeof absintheEventNames.doc,
  GqlRequestCompat<Variables>
>;


/**
 * Exports
 */

export type { AbsintheDocEvent };
