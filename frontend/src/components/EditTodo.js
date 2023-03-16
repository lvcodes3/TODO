import { useState } from "react";

// EditTodo is a React Component that will display a modal box
// and will update a todo on the todo list
const EditTodo = ({ todo }) => {
    const [description, setDescription] = useState(todo.description);

    const updateDescription = async (e) => {
        // preventing page refresh for form submit
        e.preventDefault();

        try {
            const body = { description };

            // sending PUT request to backend API
            const response = await fetch(`http://localhost:5000/todo/${todo.todo_id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            // refresh the page to display the newly edited data
            window.location = "/";
        } 
        catch (err) {
            console.log(err.message);
        }
    }

    // Modal below was imported from w3schools Bootstrap 4 Modals
    return ( 
        <>
            {/* Button to Open the Modal */}
            <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
                Edit
            </button>

            {/* The Modal */}
            <div className="modal" id={`id${todo.todo_id}`} onClick={() => setDescription(todo.description)}>
                <div className="modal-dialog">
                    <div className="modal-content">

                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Todo</h4>
                            <button 
                                type="button" 
                                className="close" 
                                data-dismiss="modal"
                                onClick={() => setDescription(todo.description)}
                            >
                                &times;
                            </button>
                        </div>

                        {/* Modal body */}
                        <div className="modal-body">
                            <input 
                                className="form-control"
                                type="text"
                                value={description} 
                                onChange={e => setDescription(e.target.value)}
                            />
                        </div>

                        {/* Modal footer */}
                        <div className="modal-footer">
                            <button 
                                type="button" 
                                className="btn btn-warning" 
                                data-dismiss="modal"
                                onClick={e => updateDescription(e)}
                            >
                                Edit
                            </button>
                            <button 
                                type="button" 
                                className="btn btn-danger" 
                                data-dismiss="modal"
                                onClick={() => setDescription(todo.description)}
                            >
                                Close
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default EditTodo;