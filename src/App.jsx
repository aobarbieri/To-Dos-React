import { useState } from 'react'
import './styles.css'
import ToDoList from './ToDoList'
import NewToDoForm from './NewToDoForm'
import NewEmotionForm from './NewEmotionForm'

function App() {
	const [todos, setTodos] = useState(['Have fun', 'Learn React', 'Learn the MERN-Stack'])
	const [showTodos, setShowTodos] = useState(true)

	const addTodo = (todo) => {
		const newState = [...todos, todo]
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
			<button onClick={() => setShowTodos(!showTodos)}>{showTodos ? 'HIDE' : 'SHOW'}</button>
			<hr />
			{showTodos && <ToDoList todos={todos} />}
			<hr />
			<NewToDoForm addTodo={addTodo} />
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
