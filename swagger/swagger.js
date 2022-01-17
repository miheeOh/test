const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition:{
        openapi:"3.0.0",
        info:{
            version:"1.0.0",
            title:"swagger test",
            description:
            "swagger test"
        },
        servers:[
            {url:'http://localhost:3000'}
        ]
    },
    apis:["./routes/*.js","./routes/user/*.js"]
}

const specs = swaggerJsdoc(options);

module.exports = {swaggerUi, specs}