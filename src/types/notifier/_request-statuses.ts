/**
 * Imports
 */

import { ValueOf } from '../helpers/_value-of';

/**
 * Object
 */

const requestStatuses = {
  canceled: "canceled" as "canceled",
  canceling: "canceling" as "canceling",
  pending: "pending" as "pending",
  sent: "sent" as "sent",
  sending: "sending" as "sending",
};


/**
 * Types
 */

type RequestStatus = ValueOf<typeof requestStatuses>;


/**
 * Exports
 */

export default requestStatuses;
export type { RequestStatus };
