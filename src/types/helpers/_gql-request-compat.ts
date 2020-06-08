/**
 * Types
 */

type GqlRequestCompat<Variables extends void | Object = void> = {
  query: string;
  variables?: Variables;
};


/**
 * Exports
 */

export type { GqlRequestCompat };
