import express from 'express';

const todoRouters = express.Router();

const todos = [
    {
        id: 1,
        title: 'Formula 1',
        description: 'racing cars'
    },
 
];

// GET  todo list
todoRouters.get('/', (req,res) =>{
    res.send(todos);
});

// GET todo list by  specific id
todoRouters.get('/:id',(req,res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id);

    if (!todo) {
        return res.status(404).send('id  not found');
    }

    res.send(todos);
});

// POST (create new todo)
todoRouters.post('/todos', (req,res) => {
    const {title,description} = req.body;
    if(!title || !description)
        {return
            res.status(400).send("missing");
        }
    const newTodo = {
    id : todos.length  + 1,
    title,
    description
    };
    todos.push (newTodo);
    res.status(201).json(newTodo);
});



//PUT (update the todo list)
todoRouters.put('/todos',(req,res) =>{
const todo = todos.find(t => t.id ===parseInt(req.params.id));
if(!todo){
    return 
    res.status(404).send('todo not found');
}
const {title,description}= req.body;
todo.title=title || todo.title;
todo.description = description || todo.description;

res.send(todo);
});

//DELETE (delete todo by id)
todoRouters.delete('./todos:id',(req,res) =>{
    const id = parseInt(req.params.id);
    const todoid = todos.find(t => t.id === id);
      if(todoid  === -1)
        {
            res.status(404).send("id not found in list");
        }
        todos.splice(todoid , 1);
        res.status(204).send();
});

export default todoRouters;