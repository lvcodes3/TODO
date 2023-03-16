//////////////////////////////////////////////////////////////
// BUSINESS LOGIC RELATED TO EACH ROUTE STORED IN THIS FILE //
//////////////////////////////////////////////////////////////
const pool = require('../db');
const queries = require('./queries');


const createTodo = async (req, res) => {
    try {
        const { description } = req.body;

        const newTodo = await pool.query(
            queries.createTodo, 
            [description]
        );

        res.json(newTodo.rows[0]);
    }
    catch (err) {
        console.log(err.message);
    }
}


const getTodos = async (req, res) => {
    try {
        const allTodos = await pool.query(
            queries.getTodos
        );

        res.json(allTodos.rows);
    } 
    catch (err) {
        console.log(err.message);
    }
}


const getTodo = async (req, res) => {
    try {
        const { id } = req.params;
        
        const todo = await pool.query(
            queries.getTodo,
            [id]
        );

        res.json(todo.rows[0]);
    } 
    catch (err) {
        console.log(err.message);
    }
}


const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;

        const updatedTodo = await pool.query(
            queries.updateTodo,
            [description, id]
        );

        res.json({ "message": "Todo was updated." });
    } 
    catch (err) {
        console.log(err.message);
    }
}


const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedTodo = await pool.query(
            queries.deleteTodo,
            [id]
        );

        res.json({ "message": "Todo was deleted." });
    } 
    catch (err) {
        console.log(err.message);
    }
}


module.exports = {
    createTodo,
    getTodos,
    getTodo,
    updateTodo,
    deleteTodo
};