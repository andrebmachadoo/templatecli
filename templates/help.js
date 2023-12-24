const help = `

Uso: 

$ comand [OPÇÃO] 

Gera arquivos de rotas, controllers e models conforme templates 
----------------------------------------------------------------
Argumentos necessários para gerar os arquivo corretamente 

-name: Nome da rota, controller e model
-f (fields) : Campos para inserção no model 
-h (help): Para exibir esse documento

Exemplo:

$ comand -h
$ comand -name produtos -f id descricao valor  

`
export { help }