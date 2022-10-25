import { type Store as IStore } from 'redux';
import { type IServices } from '@common/services';

import { type FilledContext as IHelmetContext } from 'react-helmet-async';

export interface IApplicationOptions {
    isServer?: boolean; // Whether application should be created on server side (SSR case)
    path?: string; // Current location path if exists
    store: IStore;
    services: IServices;
    helmetContext?: IHelmetContext | { helmet?: { htmlAttributes: object } }; // React Helmet context (used for async SSR flow) (Filled | Unfilled)
}

export interface ICreateAppFunction {
    (object: IApplicationOptions): JSX.Element;
}
