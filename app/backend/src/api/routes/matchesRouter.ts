import { Router, Response, Request } from 'express';
import { MatchesController } from '../controller';
import Auth from '../middleware/Authorization';
// import ValidateLogin from '../middleware/loginMiddleware';
import { MatchesService } from '../services';

const router = Router();
const machesService = new MatchesService();
const matchesController = new MatchesController(machesService);

router.get('/matches', (request: Request, response: Response) => matchesController
  .getMatches(request, response));

router.patch(
  '/matches/:id/finish',
  // ValidateLogin.verifyLoginData,
  Auth.checkToken,
  (request: Request, response: Response) => matchesController
    .getFinishMatches(request, response),
);

export default router;
