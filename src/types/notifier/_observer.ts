/**
 * Imports
 */

import { Notifier } from './_notifier';


/**
 * Types
 */

type Observer<Result, Variables extends void | Object = void> = {
  onAbort?: (error: Error) => any;
  onCancel?: () => any;
  onError?: (error: Error) => any;
  onStart?: (notifier: Notifier<Result, Variables>) => any;
  onResult?: (result: Result) => any;
};


/**
 * Exports
 */

export type { Observer };
