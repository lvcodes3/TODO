import { useEffect, useState } from "react";
import EditTodo from "./EditTodo";

// ListTodos is a React Component that displays all of the todos in the PGSQL DB
// accessed from our backend API via GET fetch
const ListTodos = () => {
    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        try {
            // default GET request to fetch all the todos in the PGSQL DB
            const response = await fetch("http://localhost:5000/todo");
            // parsing the data response
            const jsonData = await response.json(); // console.log(jsonData);
            // set the received data into our useState
            setTodos(jsonData);
        } 
        catch (err) {
            console.log(err.message);
        }
    }

    const deleteTodo = async (id) => {
        try {
            // sending DELETE request to backend API with fetch
            const deleteTodo = await fetch(`http://localhost:5000/todo/${id}`, {
                method: "DELETE"
            });
            
            // filter out the todo that was deleted
            // will refresh the data since it is a useState
            setTodos(todos.filter(todo => todo.todo_id !== id));
        } 
        catch (err) {
            console.log(err.message);
        }
    }

    // useEffect only makes 1 request on page load due to []
    useEffect(() => {
        getTodos();
    }, []);


    return ( 
        <>
            <table className="table mt-5 text-center">
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {/* mapping each todo as a row */}
                {todos.map(todo => (
                    <tr key={todo.todo_id}>
                        <td>{todo.description}</td>
                        <td>
                            {/* EditTodo React Component (modal) passing in todo as props */}
                            <EditTodo todo={todo} />
                        </td>
                        <td>
                            <button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );

    // Bootstrap 4 notes:
    // table         ->   light padding and horizontal dividers styling
    // mt-5          ->   margin top 5
    // text-center   ->   text align center
    // btn           ->   styles a button
    // btn-danger    ->   red background color, white text color
}
 
export default ListTodos;