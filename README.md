# API Spec
# User
## Get All User
- Method : GET
- Endpoint : `users/`
- Respon Body :
```json 
{
    "Message": "Succses Get data user",
    "data": [
        {
            "_id": "string",
            "name": "string",
            "email": "string",
            "pass": "string",
            "role": "string"
    }
}
```
## Get User By Id
- Method : GET
- Endpoint : `users/:id`
- Respon Body :
```json 
{
    "Message": "Succses Get data user by id",
    "data": [
        {
            "_id": "string",
            "name": "string",
            "email": "string",
            "pass": "string",
            "role": "string"
    }
}
```
## Regitser / Post User
- Method : POST
- Endpoint : `users/`
- Request Body :
```json 
{
    "name": "string",
    "email": "string",
    "pass": "string",
    "role": "string"
}
```
- Respon Body :
```json 
{
    "Message": "Succses post data user",
    "data": [
        {
            "_id": "string",
            "name": "string",
            "email": "string",
            "pass": "string",
            "role": "string"
    }
}
```
## Update user by id
- Method : PUT
- Endpoint : `users/:id`
- Respon Body :
```json 
{
    "Message": "Succses Update data user by id",
    "data": [
        {
            "_id": "string",
            "name": "string",
            "email": "string",
            "pass": "string",
            "role": "string"
    }
}
```
## Delete user by id
- Method : DELETE
- Endpoint : `users/:id`
- Respon Body :
```json 
{
    "Message": "Succses Delete data user by id",
    "data": [
        {
            "_id": "string",
            "name": "string",
            "email": "string",
            "pass": "string",
            "role": "string"
    }
}
```
---
# Events
## Get All Events
- Method : GET
- Endpoint : `events/`
- Respon Body :
```json 
{
    "Message": "Succses get data event",
    "data": [
        {
            "_id": "String",
            "name": "String",
            "poster": "String",
            "desc": "String",
            "place": "String",
            "organizer": "String",
            "CP": "String",
            "phone": "String",
            "person": :"number",
            "maxPerson": "number
    }
}
```
## Get Events By Id
- Method : GET
- Endpoint : `events/:id`
- Respon Body :
```json 
{
    "Message": "Succses Get data event by id",
    "data": [
        {
            "_id": "String",
            "name": "String",
            "poster": "String",
            "desc": "String",
            "place": "String",
            "organizer": "String",
            "CP": "String",
            "phone": "String",
            "person": :"number",
            "maxPerson": "number
    }
}
```
## Post Events
- Method : POST
- Endpoint : `events/`
- Request Body :
```json 
{
    "name": "String",
    "poster": "String",
    "desc": "String",
    "place": "String",
    "organizer": "String",
    "CP": "String",
    "phone": "String",
    "person": :"number",
    "maxPerson": "number
    }
}
```
- Respon Body :
```json 
{
    "Message": "Succses Post event",
    "data": [
        {
            "_id": "String",
            "name": "String",
            "poster": "String",
            "desc": "String",
            "place": "String",
            "organizer": "String",
            "CP": "String",
            "phone": "String",
            "person": :"number",
            "maxPerson": "number
    }
}
```
## Update Event By Id
- Method : UPDATE
- Endpoint : `events/:id`
- Respon Body :
```json 
{
    "Message": "Succses Update Event",
    "data": [
        {
            "_id": "String",
            "name": "String",
            "poster": "String",
            "desc": "String",
            "place": "String",
            "organizer": "String",
            "CP": "String",
            "phone": "String",
            "person": :"number",
            "maxPerson": "number
    }
}
```
## Delete Event By id
- Method : DELETE
- Endpoint : `events/:id`
- Respon Body :
```json 
{
    "Message": "Succses DeleteEvent",
    "data": [
        {
            "_id": "String",
            "name": "String",
            "poster": "String",
            "desc": "String",
            "place": "String",
            "organizer": "String",
            "CP": "String",
            "phone": "String",
            "person": :"number",
            "maxPerson": "number
    }
}
```
## Register to event
- Method : PUT
- Endpoint : `events/person/:id`
- Respon Body :
```json 
{
    "Message": "Succses Get data event by id",
    "data": [
        {
            "mess": "succes update data",
            "before": "number,
            "New Data": "number
        }
}
```
---
# Articles
## Get All Article
- Method : GET
- Endpoint : `articles/`
- Respon Body :
```json 
{
    "Message": "Succses Get data articles",
    "data": [
        {
            "title": "String",
            "poster": "String",
            "content" : "String",
            "author" : "String",
            "date" : "Date",
            "likes" : "Number"
        }
}
```
## Get Article By Id
- Method : GET
- Endpoint : `articles/:id`
- Respon Body :
```json 
{
    "Message": "Succses Get data articles by id",
    "data": [
        {
            "title": "String",
            "poster": "String",
            "content" : "String",
            "author" : "String",
            "date" : "Date",
            "likes" : "Number"
        }
}
```
## Update Article
- Method : PUT
- Endpoint : `articles/:id`
- Respon Body :
```json 
{
    "Message": "Succses Get data articles by id",
    "data": [
        {
            "title": "String",
            "poster": "String",
            "content" : "String",
            "author" : "String",
            "date" : "Date",
            "likes" : "Number"
        }
}
```
## Delete Article
- Method : DELETE
- Endpoint : `articles/:id`
- Respon Body :
```json 
{
    "Message": "Succses Get data articles by id",
    "data": [
        {
            "title": "String",
            "poster": "String",
            "content" : "String",
            "author" : "String",
            "date" : "Date",
            "likes" : "Number"
        }
}
```
## Like Article
- Method : PUT
- Endpoint : `articles/likeby/:id`
- Respon Body :
```json 
{
    "Message": "Succses Get data articles by id",
    "data": [
        {
            "title": "String",
            "poster": "String",
            "content" : "String",
            "author" : "String",
            "date" : "Date",
            "likes" : "Number"
        }
}
```
---
# Auth Login
## Auth
- Method : POST
- Endpoints : `auth/login`
- Req body : 
```json 
{
            "email": "String",
            "pass": "String"
}
```
- Res body : 
```json 
{
    "Message": "Data ditemukan dan berhasil login",
    "data": [
        {
            "_id": "String",
    "name": "String",
    "email": "String",
    "pass": "String",
    "role": "String",
    "__v": 0
  },
  "token": "String"
        }
}
```