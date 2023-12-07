import { useState } from 'react'

export default function NewToDoForm(props) {
	// 1. Local state for the form
	const [newTodo, setNewTodo] = useState()

	// 2. event handler -handleChange
	const handleChange = (evt) => {
		setNewTodo(evt.target.value)
	}

	const handleAddTodo = (evt) => {
		evt.preventDefault()
		const userInput = {
			text: newTodo,
			completed: false,
		}
		props.addTodo(userInput)
		setNewTodo('')
	}
	// 3. modify our JSX - control an input element through its value attribute
	// 3a. assign onChange prop => input <- handler
	return (
		<>
			<h2>New To-Do</h2>
			<form onSubmit={handleAddTodo}>
				<input value={newTodo} placeholder='New To-Do' onChange={handleChange} required pattern='.{4,}' />
				<button>ADD TO-DO</button>
			</form>
		</>
	)
}
