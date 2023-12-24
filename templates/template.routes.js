const templateRoutes = `
import { Router } from "express";
import TemplateController from "../controllers/template.controller.js";
// import { check } from "express-validator";

const routerTemplate = Router()

const validation = [
    //check('email').isEmail().withMessage('Email invalido'),
    //check('password').isLength({ min: 6, max: 10 }).withMessage('Password deve ser superior a 6 caracteres')
]

routerTemplate.post('/login', TemplateController.Login);
routerTemplate.get('/user', TemplateController.All);
routerTemplate.post('/user', validation, TemplateController.Create);
routerTemplate.put('/user', validation, TemplateController.Atualizar);

export default routerTemplate;`

export default templateRoutes;

