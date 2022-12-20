import { FC, ReactNode } from 'react';

export type FCWithChildren<T = object> = FC<{ children?: ReactNode } & T>;

export interface IBaseApolloReturn<T = any> {
  data: T;
  loading: boolean;
  error: any;
}
