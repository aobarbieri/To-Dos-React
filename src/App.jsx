import './styles.css'
import ToDoList from './ToDoList'

function App() {

  const todos = ['finish lesson', 'eat some lunch', 'work on labs']

	return (
		<div className='App'>
      <h1>React To-Do</h1>
      <ToDoList todos={ todos } />
		</div>
	)
}

export default App
