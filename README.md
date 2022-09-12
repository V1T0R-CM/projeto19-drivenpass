# projeto19-drivenpass

Api disponive no endereço (https://driven-pass19-api.herokuapp.com)

# Rotas de autenticação:

## Rota <span style="color:yellow"> **POST** </span>/signup

Essa é uma rota não autenticada. Sua função é criar uma nova conta.

O Body da requisição deve ser feito no seguinte formato:

```json
{
  "email": "email_da_conta", //string
  "password": "senha_da_conta" //string_min_length(10)
}
```

## Rota <span style="color:yellow"> **POST** </span>/signin

Essa é uma rota não autenticada. Sua função é fazer o login em uma conta já criada.

O Body da requisição deve ser feito no seguinte formato:

```json
{
  "email": "email_da_conta", //string
  "password": "senha_da_conta" //string_min_length(10)
}
```

A resposta da requisição virá no seguinte formato:

```json
{
  "token": "token_de_acesso" //string
}
```
# Rotas de credeciais:

## Rota <span style="color:yellow"> **POST** </span>/credentials

Essa é uma rota autenticada com um header http do tipo "authorization" no formato "Bearer token". Sua função é criar um novo registro de credencial.

O Body da requisição deve ser feito no seguinte formato:

```json
{
  "url": "url_da_credencial", //string
  "userName": "nome_de_usuario", //string
  "password": "senha_da_credencial", //string
  "credentialTitle": "titulo_da_credencial" //string
}
```

## Rota <span style="color:green"> **GET** </span>/credentials
Essa é uma rota autenticada com um header http do tipo "authorization" no formato "Bearer token". Sua função é obter todos os registros de credencial salvos na conta.

A resposta da requisição virá no seguinte formato:
```json
[
  {
    "url": "url_da_credencial", //string
    "userName": "nome_de_usuario", //string
    "password": "senha_da_credencial", //string
    "credentialTitle": "titulo_da_credencial" //string
  }
]
```
## Rota <span style="color:green"> **GET** </span>/credentials/:id
Essa é uma rota autenticada com um header http do tipo "authorization" no formato "Bearer token". Sua função é obter o registro de credencial correspontente ao id.

A resposta da requisição virá no seguinte formato:
```json
{
  "url": "url_da_credencial", //string
  "userName": "nome_de_usuario", //string
  "password": "senha_da_credencial", //string
  "credentialTitle": "titulo_da_credencial" //string_max_length(50)
}
```
## Rota <span style="color:red"> **DELETE** </span>/credentials/:id
Essa é uma rota autenticada com um header http do tipo "authorization" no formato "Bearer token". Sua função é deletar o registro de credencial correspontente ao id.

# Rotas de notas seguras:

## Rota <span style="color:yellow"> **POST** </span>/notes

Essa é uma rota autenticada com um header http do tipo "authorization" no formato "Bearer token". Sua função é criar um novo registro de notas seguras.

O Body da requisição deve ser feito no seguinte formato:

```json
{
  "title": "titulo_da_nota", //string_max_length(50)
  "content": "conteudo_da_nota" //string_max_length(1000)
}
```

## Rota <span style="color:green"> **GET** </span>/notes
Essa é uma rota autenticada com um header http do tipo "authorization" no formato "Bearer token". Sua função é obter todos os registros de notas seguras salvos na conta.

A resposta da requisição virá no seguinte formato:
```json
[
  {
    "title": "titulo_da_nota", //string_max_length(50)
    "content": "conteudo_da_nota" //string_max_length(1000)
  }
]
```
## Rota <span style="color:green"> **GET** </span>/notes/:id
Essa é uma rota autenticada com um header http do tipo "authorization" no formato "Bearer token". Sua função é obter o registro de notas seguras correspontente ao id.

A resposta da requisição virá no seguinte formato:
```json
{
  "title": "titulo_da_nota", //string_max_length(50)
  "content": "conteudo_da_nota" //string_max_length(1000)
}
```
## Rota <span style="color:red"> **DELETE** </span>/notes/:id
Essa é uma rota autenticada com um header http do tipo "authorization" no formato "Bearer token". Sua função é deletar o registro de notas seguras correspontente ao id.

# Rotas de wi-fi:

## Rota <span style="color:yellow"> **POST** </span>/wifis

Essa é uma rota autenticada com um header http do tipo "authorization" no formato "Bearer token". Sua função é criar um novo registro de wi-fi.

O Body da requisição deve ser feito no seguinte formato:

```json
{
  "name": "nome_da_rede", //string
  "password": "senha_da_rede", //string
  "wifiTitle": "titulo_da_rede" //string_max_length(50)
}
```

## Rota <span style="color:green"> **GET** </span>/wifis
Essa é uma rota autenticada com um header http do tipo "authorization" no formato "Bearer token". Sua função é obter todos os registros de wi-fi salvos na conta.

A resposta da requisição virá no seguinte formato:
```json
[
  {
    "name": "nome_da_rede", //string
    "password": "senha_da_rede", //string
    "wifiTitle": "titulo_da_rede" //string_max_length(50)
  } 
]
```
## Rota <span style="color:green"> **GET** </span>/wifis/:id
Essa é uma rota autenticada com um header http do tipo "authorization" no formato "Bearer token". Sua função é obter o registro de wi-fi correspontente ao id.

A resposta da requisição virá no seguinte formato:
```json
{
  "name": "nome_da_rede", //string
  "password": "senha_da_rede", //string
  "wifiTitle": "titulo_da_rede" //string_max_length(50)
}
```
## Rota <span style="color:red"> **DELETE** </span>/wifis/:id
Essa é uma rota autenticada com um header http do tipo "authorization" no formato "Bearer token". Sua função é deletar o registro de wi-fi correspontente ao id.

# Rotas de cartão:

## Rota <span style="color:yellow"> **POST** </span>/cards

Essa é uma rota autenticada com um header http do tipo "authorization" no formato "Bearer token". Sua função é criar um novo registro de cartão.

O Body da requisição deve ser feito no seguinte formato:

```json
{
  "number": "numero_do_cartao", //string_number_length(16)
  "holderName": "nome_impresso", //string
  "securityCode": "codigo_de_seguranca", //string_number_length(3)
  "expirationDate": "data_expiração_do_cartao", //string_format(MM/YY)
  "password": "senha_do_cartao", //string_number
  "isVirtual": "identificador_cartao", //boolean
  "type": "tipo_do_cartao" //string_valid()
}
```

## Rota <span style="color:green"> **GET** </span>/cards
Essa é uma rota autenticada com um header http do tipo "authorization" no formato "Bearer token". Sua função é obter todos os registros de cartões salvos na conta.

A resposta da requisição virá no seguinte formato:
```json
[
  {
    "number": "numero_do_cartao", //string_number_length(16)
    "holderName": "nome_impresso", //string
    "securityCode": "codigo_de_seguranca", //string_number_length(3)
    "expirationDate": "data_expiração_do_cartao", //string_format(MM/YY)
    "password": "senha_do_cartao", //string_number
    "isVirtual": "identificador_cartao", //boolean
    "type": "tipo_do_cartao" //string_valid()
  }
]
```
## Rota <span style="color:green"> **GET** </span>/cards/:id
Essa é uma rota autenticada com um header http do tipo "authorization" no formato "Bearer token". Sua função é obter o registro de cartão correspontente ao id.

A resposta da requisição virá no seguinte formato:
```json
{
  "number": "numero_do_cartao", //string_number_length(16)
  "holderName": "nome_impresso", //string
  "securityCode": "codigo_de_seguranca", //string_number_length(3)
  "expirationDate": "data_expiração_do_cartao", //string_format(MM/YY)
  "password": "senha_do_cartao", //string_number
  "isVirtual": "identificador_cartao", //boolean
  "type": "tipo_do_cartao" //string_valid()
}
```
## Rota <span style="color:red"> **DELETE** </span>/cards/:id
Essa é uma rota autenticada com um header http do tipo "authorization" no formato "Bearer token". Sua função é deletar o registro de cartão correspontente ao id.
