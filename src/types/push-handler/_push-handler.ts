/**
 * Types
 */

type PushHandler<Response extends Object> = {
  onError: (errorMessage: string) => any;
  onSucceed: (response: Response) => any;
  onTimeout: () => any;
};


/**
 * Exports
 */

export type { PushHandler };
