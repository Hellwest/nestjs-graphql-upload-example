# NestJS Upload DEMO

## Postman

POST localhost:5000/graphql
Body - form-data

KEY           VALUE
operations    { "query": "mutation ($file: Upload!) { uploadFile(file: $file) }", "variables": { "file": null } }
map           { "file": ["variables.file"] }
file          <choose your file here>
