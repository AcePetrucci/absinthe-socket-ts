/**
 * Imports
 */

import { Notifier } from '../notifier/_notifier';

import { AbsintheSocket } from '../absinthe/_absinthe-socket';


/**
 * Types
 */

type NotifierPushHandler<Response extends Object> = {
  onError: (
    absintheSocket: AbsintheSocket,
    notifier: Notifier<any, any>,
    errorMessage: string,
  ) => any;
  onSucceed: (
    absintheSocket: AbsintheSocket,
    notifier: Notifier<any, any>,
    response: Response,
  ) => any;
  onTimeout: (
    absintheSocket: AbsintheSocket,
    notifier: Notifier<any, any>,
  ) => any;
};


/**
 * Exports
 */

export type { NotifierPushHandler };
