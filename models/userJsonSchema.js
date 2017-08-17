module.exports= {
   userJsonSchema: {
      "$schema": "http://json-schema.org/draft-04/schema#",
      "definitions": {},
      "id": "UserJsonShema",
      "properties": {
         "email": {
            "id": "/properties/email",
            "pattern": "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])",
            "type": "string"
         },
         "name": {
            "id": "/properties/name",
            "type": "string"
         },
         "password": {
            "description": "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
            "id": "/properties/password",
            "maxLength": 30,
            "minLength": 8,
            //"pattern": "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&]{8,}",
            "type": "string"
         },
         "username": {
            "id": "/properties/username",
            "type": "string"
         }
      },
      "required": [
         "password",
         "email"
      ],
      "type": "object"
   }
}
