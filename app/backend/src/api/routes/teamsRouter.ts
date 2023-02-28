import { Router, Response, Request } from 'express';
import TeamsController from '../controller';
import TeamsService from '../services';

const router = Router();
const teamsService = new TeamsService();
const teamsController = new TeamsController(teamsService);

router.get('/teams', (request: Request, response: Response) => teamsController
  .getAll(request, response));

router.get('/teams/:id', (request: Request, response: Response) => teamsController
  .getById(request, response));

export default router;
