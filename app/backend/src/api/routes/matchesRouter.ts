import { Router, Response, Request } from 'express';
import { MatchesController } from '../controller';
import Auth from '../middleware/Authorization';
import { MatchesService } from '../services';

const router = Router();
const matchesService = new MatchesService();
const matchesController = new MatchesController(matchesService);

router.get('/matches', (request: Request, response: Response) => matchesController
  .getMatches(request, response));

router.patch(
  '/matches/:id/finish',
  Auth.checkToken,
  (request: Request, response: Response) => matchesController
    .updateFinishMatches(request, response),
);

router.patch(
  '/matches/:id',
  Auth.checkToken,
  (request: Request, response: Response) => matchesController
    .getupdatehMatch(request, response),
);

router.post(
  '/matches',
  Auth.checkToken,
  (request: Request, response: Response) => matchesController
    .createMatches(request, response),
);

export default router;
