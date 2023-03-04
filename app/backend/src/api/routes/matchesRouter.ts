import { Router, Response, Request } from 'express';
import { MatchesController } from '../controller';
import { MatchesService } from '../services';

const router = Router();
const machesService = new MatchesService();
const matchesController = new MatchesController(machesService);

router.get('/matches', (request: Request, response: Response) => matchesController
  .getMatches(request, response));

export default router;
