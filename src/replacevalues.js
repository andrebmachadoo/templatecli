import  fs  from "fs";
import templateRoutes from "./templates/template.routes.js";
import templateController from "./templates/template.controller.js";
import templateModel from "./templates/template.model.js";


export default class ReplaceValues{
    constructor(attribs){
        this.templateRoutes = templateRoutes
        this.templateController = templateController
        this.templateModel = templateModel
        this.fields = '' || 'UndefinedFields'
        this.templateName = '' || 'UndefinedName'

        Object.assign(this, attribs)
        this.templateNameFirstUpper = ''
        this.NameFirstUpper()
        // this.fs = fs
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
            this.fields = this.fields.replace(/_fields_/g, this.fields);
        }
    }

    ReplaceModel(){
        this.templateModel = this.templateModel.replace(/template/g, this.templateName);
        this.templateModel = this.templateModel.replace(/Template/g, this.templateNameFirstUpper);
        if(this.fields){
            this.fields = this.fields.replace(/_fields_/g, this.fields);
        }
    }

    ReplaceAll(){
        this.ReplaceRoutes()
        this.ReplaceController()
        this.ReplaceModel()
    }

    // CreateFile(pathAndFileName,fileContent){
    //     fs.writeFile(pathAndFileName,fileContent,(err) => {
    //         if(err){
    //             return console.log(`Erro ao criar o arquivo ${pathAndFileName}.`)
    //         }
    //         //Caso não tenha erro, retornaremos a mensagem de sucesso
    //         console.log(`Arquivo ${pathAndFileName} Criado`);
    //     });
    // }

    CreateTemplateFiles(){
        this.ReplaceAll()
        let templatelist = {
            templateRoutes:`./routes/${this.templateName}.routes.js`,
            templateController:`./controllers/${this.templateName}.controller.js`,
            templateModel:`./model/${this.templateName}.model.js`,
        }

        for (const [fileContent, pathAndFileName] of Object.entries(templatelist)) {

            let directory = pathAndFileName.split('/')[1]
            fs.existsSync(directory) || fs.mkdirSync(directory);
            fs.unlink(pathAndFileName,(err) => { 
                if(err) console.log(`Error delete file ${pathAndFileName}`)
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
        // templatelist.forEach(v=>{
        //     let template = Object.keys(v)[0]
        //     fs.writeFile(pathAndFileName,fileContent,(err) => {
        //         if(err){
        //             return console.log(`Erro ao criar o arquivo ${pathAndFileName}.`)
        //         }
        //         //Caso não tenha erro, retornaremos a mensagem de sucesso
        //         console.log(`Arquivo ${pathAndFileName} Criado`);
        //     });
        //})

        
    }

}

