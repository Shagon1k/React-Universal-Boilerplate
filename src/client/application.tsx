import Application from './Application.component';

import { type IApplicationOptions, type ICreateAppFunction } from './application.types';

// Main application render function
export const createApp: ICreateAppFunction = ({
    isServer,
    path,
    store,
    services,
    helmetContext,
}: IApplicationOptions) => {
    const app = <Application options={{ isServer: isServer, path, store, services, helmetContext }} />;

    return app;
};
