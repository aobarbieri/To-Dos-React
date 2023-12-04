import ToDoListItem from './ToDoListItem'

function ToDoList(props) {
	console.log(props)
	
	const todoListItems = props.todos.map(function (el, id) {
		return <ToDoListItem key={id} todo={el} />
	})

	return (
		<ul>
			{todoListItems}
		</ul>
	)
}

export default ToDoList
