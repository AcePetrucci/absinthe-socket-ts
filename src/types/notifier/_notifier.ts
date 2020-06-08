/**
 * Imports
 */

import type { OperationTypeNode } from 'graphql';

import type { GqlRequest } from '../helpers/_gql-request';

import type { RequestStatus } from './_request-statuses';
import type { Observer } from './_observer';


/**
 * Types
 */

type Notifier<Result, Variables extends void | Object = void> = {
  activeObservers: ReadonlyArray<Observer<Result, Variables>>;
  canceledObservers: ReadonlyArray<Observer<Result, Variables>>;
  isActive: boolean;
  operationType: OperationTypeNode;
  request: GqlRequest<Variables>;
  requestStatus: RequestStatus;
  subscriptionId?: string;
};


/**
 * Exports
 */

export type { Notifier };
