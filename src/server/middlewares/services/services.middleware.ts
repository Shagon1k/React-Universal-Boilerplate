import { type Request as IRequest, type Response as IResponse, type NextFunction as INext } from 'express';

import { createServices } from '@services';

const createServicesMiddleware = () => async (req: IRequest, res: IResponse, next: INext) => {
    const userAgent = req.headers['user-agent'] || '';
    const baseLanguage = req.headers['accept-language'] || null;

    const services = createServices({
        userAgent,
        baseLanguage,
    });

    res.locals.services = services;

    next();
};

export default createServicesMiddleware;
