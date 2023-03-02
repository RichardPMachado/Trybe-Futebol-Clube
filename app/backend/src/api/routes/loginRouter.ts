import { Router, Response, Request } from 'express';
import ValidateLogin from '../middleware/loginMiddleware';
import { LoginController } from '../controller';
import { LoginService } from '../services';
import Auth from '../middleware/Authorization';

const router = Router();
const loginService = new LoginService();
const loginController = new LoginController(loginService);

router.post(
  '/login',
  ValidateLogin.verifyLoginData,
  (request: Request, response: Response) => loginController.authLogin(request, response),
);

router.get(
  '/login/role',
  Auth.checkToken,
  (request: Request, response: Response) => loginController.authLogin(request, response),
);
export default router;
