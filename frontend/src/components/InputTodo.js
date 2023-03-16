import { useState } from "react";

// InputTodo is a React Component that allows a user to input a todo message into the
// PGSQL DB by accessing our backend API via POST fetch and sending data
const InputTodo = () => {
    const [description, setDescription] = useState("");

    const handleFormSubmit = async (e) => {
        // preventing page refresh for form submit
        e.preventDefault();

        try {
            const body = { description };

            // sending POST request to backend API with fetch
            const response = await fetch("http://localhost:5000/todo", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            // refresh the page to display the newly added data
            window.location = "/";
        } 
        catch (err) {
            console.log(err.message);
        }
    }

    return ( 
        <>
            <h1 className="text-center mt-5">Todo List</h1>
            <form className="d-flex mt-5" onSubmit={handleFormSubmit}>
                <input 
                    type="text" 
                    className="form-control" 
                    value={description} 
                    onChange={e => setDescription(e.target.value)}
                />
                <button className="btn btn-success">Add</button>
            </form>
        </>
    );

    // Bootstrap 4 notes:
    // text-center   ->   text align center
    // mt-5          ->   margin top 5
    // d-flex        ->   enables flexbox (aligns input and button next to each other)
    // form-control  ->   adds styles for general appearance, focus state, sizing, and more
    // btn           ->   styles as a button
    // btn-success   ->   green background, white text
}
 
export default InputTodo;