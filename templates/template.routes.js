const templateRoutes = `
import { Router } from "express";
import TemplateController from "../controllers/template.controller.js";
// import { check } from "express-validator";

const routerTemplate = Router()

const validation = [
    //check('email').isEmail().withMessage('Email invalido'),
    //check('password').isLength({ min: 6, max: 10 }).withMessage('Password deve ser superior a 6 caracteres')
]

routerTemplate.post('/template', TemplateController.Novo);
routerTemplate.get('/template', TemplateController.All);
routerTemplate.put('/template', validation, TemplateController.Atualizar);
routerTemplate.delete('/template', validation, TemplateController.Apagar);

export default routerTemplate;`

export default templateRoutes;

