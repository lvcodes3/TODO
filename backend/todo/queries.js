/////////////////////////////////////
// SQL QUERIES STORED IN THIS FILE //
/////////////////////////////////////

const createTodo = "INSERT INTO todo(description) VALUES($1) RETURNING *";

const getTodos = "SELECT * FROM todo";

const getTodo = "SELECT * FROM todo WHERE todo_id = $1";

const updateTodo = "UPDATE todo SET description = $1 WHERE todo_id = $2";

const deleteTodo = "DELETE FROM todo WHERE todo_id = $1";

module.exports = {
    createTodo,
    getTodos,
    getTodo,
    updateTodo,
    deleteTodo
};