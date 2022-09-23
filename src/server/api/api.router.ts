import { Router } from 'express';

const apiRouter = Router();

apiRouter.get('/_example-route', (req, res) => {
    res.json({ example: 'example' });
});

export default apiRouter;
