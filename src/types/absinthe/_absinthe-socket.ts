/**
 * Imports
 */

import type { Channel, Socket as PhoenixSocket } from 'phoenix';

import type { Notifier } from '../notifier/_notifier';


/**
 * Types
 */

type AbsintheSocket = {
  channel: Channel;
  channelJoinCreated: boolean;
  notifiers: Array<Notifier<any>>;
  phoenixSocket: PhoenixSocket;
};


/**
 * Exports
 */

export type { AbsintheSocket };
