import './App.css';
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';

function App() {
  return (
    <>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </>
  );

  // Bootstrap 4 notes:
  // container   ->   basic container used to pad area
}

export default App;
