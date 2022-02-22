const express = require('express');      // Importing Express
const cors = require('cors');      // Importing Cors
  
const db = require('./db/connection')

const server = express();                // Initializing server
 
 
// MIDDLEWEAR between req and res to check for value, authentication, ect - synchronous process
server.use(cors());     // Invoking cors - middlewear - allows us to safely share restricted resources (req and res) across the internet
server.use(express.json());      // Parses requests into JSON format.
 
 
server.get('/', (req, res) => {             // Basic route declared
    res.send('welcome to the server!!!');
});

// GET ALL TODOS
server.get('/todos', async (req, res) => {
    try {
        const todos = await db('todos');
        res.json(todos)
    } catch(err) {
        console.log(err)
    }
});

// GET TODO BY ID
server.get('/todos/:id', async (req,res) => {
    const { id } = req.params;
    try {
        const currentTodo = await db('todos').where({ id });
        currentTodo.length === 0 ? res.status(404).json({ message: 'Todo not found'}) : res.status(200).json(currentTodo);
    } catch(err) {
        console.log(err)
    }
 }) 

// POST A TODO
server.post('/todos', async (req, res) => {
    const { message } = req.body
    if(!message) {
        return res.status(400).json({ message: "You must include a message in your request."})
    }
    try {
        await db('todos').insert({ message })      //insert method inserts this into db for us
        res.status(201).json({ message: "Todo successfully stored!"})
    } catch (err) {
        console.log(err)
    }
});
 

// UPDATE A TODO
server.put('/todos/:id', async (req, res) => {
    const { id } = req.params
    const { message } = req.body
    if(!message) {
        return res.status(400).json({ message: "You must include a message in your request."})
    }
    try {
       await db('todos').where({ id }).update({ message }) 
        res.status(200).json({ message: 'Update Successful!'})
    } catch (err) {
        console.log(err)
    }
});

// DELETE A TODO
server.delete('/todos/:id', async (req, res) => {
    const { id } = req.params
    try {
       await db('todos').where({ id }).del()
        res.status(200).json({ message: 'Delete Successful!'})
    } catch (err) {
        console.log(err)
    }

});
 
module.exports = server;
