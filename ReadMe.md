# Slutprov Nodejs

## Uppgift

Utveckla en api-server, en math-server och en enkel web-app.

### api-server

- Bygg med express
- Hantera GET och POST
- GET ska hämta en JSON fil och returnera den i JSON-format (prov-nodejs.json)
  - Filen finns under filer på teams och nodejs.
- POST ska anropa math-server för en beräkning och returnera svaret i JSON-format.
- API-serven ska kunna nås från en FETCH från web-appen
- Inget krav på MVC

### GET http://127.0.0.1:3000/list

- Läs den lokala kundfilen med FETCH och returnera den i JSON-format

Resultat per person:

```
[{
    "namn" : "Stellan Hagström",
    "adress" : "Skinnebo",
    "postnr" : "619 30",
    "ort" : "TROSA",
    "mobil" : "0156-1615156",
    "epost" : "stellan.hagstrom@dodgit.com"
}]
```

Observera att fältnamnet måste vara som angivits ovan.

### POST: http://127.0.0.1:3000/add

```
Body:
{
"tal": "10,343,2334,345,22,2233,233"
}
```

### math-server

- Anropas från api-server
- Har en router POST med en funktion
- Funktion addera alla värden i parametern tal och returnera dessa till ap-servern
- Utseende på anrop är valfritt
- Inget krav på att använda express eller MVC.

### Web-App

- Minimum är ett ett anrop till api-server, som sedan ska kunna skrivas ut i console.log.
- Detta är endast för att vissa att node.js delarna fungerar.
