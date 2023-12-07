import ToDoListItem from './ToDoListItem'

function ToDoList(props) {
	const todoListItems = props.todos.map(function (el, id) {
		return <ToDoListItem key={id} todo={el} index={id} setToCompleted={props.setToCompleted} />
	})

	return <ul>{todoListItems}</ul>
}

export default ToDoList
