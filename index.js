import express from 'express';
import bodyParser from 'body-parser';

import todoRouters from './mytodos/todos.js';
const app = express();
const PORT = 5000;


app.use(bodyParser.json());
app.use('/todos', todoRouters);

app.get('/', (req, res) => {
    console.log('[TEST]!');
    res.send("hello");
});
    

app.listen(PORT ,() => console.log(`Server running on port:http://localhost:${PORT}`));
