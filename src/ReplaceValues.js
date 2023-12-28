import  fs  from "fs";
import templateRoutes from "../templates/template.routes.js";
import templateController from "../templates/template.controller.js";
import templateModel from "../templates/template.model.js";
export default class ReplaceValues{
    constructor(attribs){
        this.templateRoutes = templateRoutes
        this.templateController = templateController
        this.templateModel = templateModel
        this.fields = ''
        this.templateName = ''
        this.path = '.'
        
        Object.assign(this, attribs)
        
        this.path =  this.path[0]
        this.templateNameFirstUpper = ''
        this.NameFirstUpper()
    }

    getAttribValue(obj, key){
        return obj[key];
    }

    NameFirstUpper(){
        let split = this.templateName.split('')
        split[0] = split[0].toUpperCase()
        this.templateNameFirstUpper = split.join('')
    }

    ReplaceRoutes(){
        this.templateRoutes = this.templateRoutes.replace(/template/g, this.templateName);
        this.templateRoutes = this.templateRoutes.replace(/Template/g, this.templateNameFirstUpper);
    }

    ReplaceController(){
        this.templateController = this.templateController.replace(/template/g, this.templateName);
        this.templateController = this.templateController.replace(/Template/g, this.templateNameFirstUpper);        
        if(this.fields){
            this.templateModel.replace(/destructure/gi, this.fields);
        }
    }

    ReplaceModel(){
        this.templateModel = this.templateModel.replace(/template/g, this.templateName);
        this.templateModel = this.templateModel.replace(/Template/g, this.templateNameFirstUpper);
        if(this.fields){
            this.templateModel.replace(/destructure/gi, this.fields);
        }
    }

    ReplaceAll(){
        this.ReplaceRoutes()
        this.ReplaceController()
        this.ReplaceModel()
    }

    CreateTemplateFiles(){
        this.ReplaceAll()
        const path_root = this.path || '.'
        let templatelist = {
            templateRoutes:`${path_root}/routes/${this.templateName}.routes.js`,
            templateController:`${path_root}/controllers/${this.templateName}.controller.js`,
            templateModel:`${path_root}/model/${this.templateName}.model.js`,
        }

        for (const [fileContent, pathAndFileName] of Object.entries(templatelist)) {

            let directory = this.path +'/'+ pathAndFileName.split('/')[1]
            fs.existsSync(this.path) || fs.mkdirSync(this.path);
            fs.existsSync(directory) || fs.mkdirSync(directory);
            fs.existsSync(pathAndFileName,(exist)=>{ 
                if(exist){
                    fs.unlink(pathAndFileName,(err) => {
                        if(err) console.log(`Error delete file ${pathAndFileName}`)
                    })
                }
            })

            fs.writeFile(pathAndFileName,this.getAttribValue(this,fileContent),(err) => {
                if(err){
                    console.log(err)
                    return console.log(`Erro ao criar o arquivo ${pathAndFileName}.`)
                }
                //Caso não tenha erro, retornaremos a mensagem de sucesso
                console.log(`Arquivo ${pathAndFileName} Criado`);
            });


        }
    }

}
