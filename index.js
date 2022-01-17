const express = require('express');
//const api = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const {swaggerUi,specs} = require('./swagger/swagger');

app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(specs))

app.listen(3000,()=>{
    console.log('server start 3000');
})