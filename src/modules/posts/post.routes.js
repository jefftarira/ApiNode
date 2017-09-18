import { Router } from 'express';
import validate from 'express-validation'

import * as postController from './post.controller';
import { authJwt } from '../../services/auth.services';
import postValidation from './post.validations';

const routes = new Router();

routes.get('/:id', postController.getPostById);
routes.post('/', authJwt, validate(postValidation.createPost), postController.createPost);

export default routes;
