import ReplaceValues from "./src/ReplaceValues.js";
import { help } from "./templates/help.js";
// Tratando parametros 
var params = process.argv
var pathTranspiler = process.argv[0]
var pathThisFile = process.argv[1]
params.splice(0, 2);

var validParams     = [ 'name', 'f','help','path','v']
var sanitizedParams = {}
var tempName = ''
params.forEach(v =>{
    //if(v.indexOf('-') > -1){
    if(v.includes('-')){
        tempName = v.replace(/[^a-zA-Z0-9]/g,'');        
        sanitizedParams[tempName] = []
        if(!validParams.indexOf(v)<-1) console.log(`Parametro ${v} inválido!`)
    }
    if(!v.includes('-')) sanitizedParams[tempName].push(v)
})
if(sanitizedParams.name) sanitizedParams.name = sanitizedParams.name.join('')
if(sanitizedParams.f) sanitizedParams.f = sanitizedParams.f.join(',')

// Events
if(validParams.includes('v')){
  console.log('JavaScript Console interface version 1.0.8')
}else if(sanitizedParams.h){
  console.log(help,'\n', pathTranspiler,pathThisFile)
}else{
  const replace = new ReplaceValues({
    templateName:sanitizedParams.name,
    fields:sanitizedParams.f,
    path:sanitizedParams.path
  })
  
  replace.CreateTemplateFiles()
}
