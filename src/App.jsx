import { useState } from 'react'
import './styles/styles.css'
import ToDoList from './ToDoList'
import NewToDoForm from './NewToDoForm'

function App() {
	const [todos, setTodos] = useState([
		{ text: 'Have Fun', completed: true },
		{ text: 'Learn React', completed: false },
		{ text: 'Learn the MERN-Stack', completed: false },
	])
	const [showTodos, setShowTodos] = useState(true)

	const addTodo = (todo) => {
		const newState = [...todos, todo]
		setTodos(newState)
	}

	const setToCompleted = (clickedToDo) => {
		//Replace objects/arrays, not mutate them
		const todosCopy = [...todos]
		todosCopy[clickedToDo.index].completed = true

		function isCompleted(todo) {
			if (!todo.completed) {
				return todo
			}
		}
		const newState = todosCopy.filter(isCompleted)
		setTodos(newState)
	}

	const [formData, setFormData] = useState({
		name: '',
		emotion: '😁',
	})

	const handleChange = (evt) => {
		const newFormData = { ...formData, [evt.target.name]: evt.target.value }
		setFormData(newFormData)
	}

	return (
		<div className='App'>
			<h1>React To-Do</h1>
			<hr />
			<NewToDoForm addTodo={addTodo} />
			<button onClick={() => setShowTodos(!showTodos)}>{showTodos ? 'HIDE' : 'SHOW'}</button>
			<hr />
			{showTodos && <ToDoList todos={todos} setToCompleted={setToCompleted} />}

			<hr />
			<form>
				<h1>
					{formData.name} is {formData.emotion}
				</h1>
				<label>NAME</label>
				<input name='name' onChange={handleChange} />
				<label>EMOTION</label>
				<select name='emotion' onChange={handleChange}>
					<option value='😁'>Happy</option>
					<option value='😐'>Neutral</option>
					<option value='😠'>Angry</option>
				</select>
			</form>
		</div>
	)
}

export default App
