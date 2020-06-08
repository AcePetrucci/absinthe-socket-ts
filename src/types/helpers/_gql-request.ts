/**
 * Types
 */

type GqlRequest<Variables extends void | Object = void> = {
  operation: string;
  variables?: Variables;
};


/**
 * Exports
 */

export type { GqlRequest };
