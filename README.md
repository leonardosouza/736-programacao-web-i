# 736-programacao-web-i

## Comandos Básicos do Linux

Listar arquivos:
```
$ ls
$ ls -la
```

Limpar a tela:
```
$ clear
```

Apagar uma pasta:
```
$ rm -rf nome_da_pasta
```

Criar uma pasta:
```
$ mkdir nome_da_pasta
```

Acessar uma pasta:
```
$ cd nome_da_pasta
```

Sair de uma pasta:
```
$ cd ..
```

Criar um arquivo:
```
$ touch nome_do_arquivo.ext
```


## NodeJs com Express

Inicializando seu projeto:
```
$ npm init -y
```

Instalando os primeiros módulos:
```
$ npm install nome_do_modulo_1 nome_do_modulo_x
$ npm install express nodemon
```

## Conceitos de Comunicação HTTP

# Http Methods

CRUD      - Ações      - HTTP METHODS / VERBS
Create    - Criar      - POST
Retrieve  - Recuperar  - GET
Update    - Atualizar  - PUT (Completa) / PATCH (Parcial)
Delete    - Excluir    - DELETE

Ref: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods

https://www.thunderclient.com/welcome => URL / ENDPOINT

# Conhecendo as principais classes de resposta do HTTP (Status Code):
* 100 ~ 199 - informational
* 200 ~ 299 - success
* 300 ~ 399 - redirection
* 400 ~ 499 - client error
* 500 ~ 599 - server error

Ref: https://dev.to/_staticvoid/status-http-fantasticos-e-onde-habitam-3-conclusao-7bg

# Cabeçalhos HTTP
Ref: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers

