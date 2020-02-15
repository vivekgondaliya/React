let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser');


//access request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Import Routes
const todoRoutes = require('./routes/todos');
app.use('/api/todos', todoRoutes);

app.listen(port, ()=> console.log('Server Up and running...'));