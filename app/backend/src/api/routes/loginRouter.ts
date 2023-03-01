import { Router, Response, Request } from 'express';
import ValidateLogin from '../middleware/loginMiddleware';
import TeamsController from '../controller';
import TeamsService from '../services';

const router = Router();
const teamsService = new TeamsService();
const teamsController = new TeamsController(teamsService);

router.post(
  '/login',
  ValidateLogin.verifyLoginData,
  (request: Request, response: Response) => teamsController.getAll(request, response),
);

export default router;
