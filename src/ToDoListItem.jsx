const ToDoListItem = (props) => {
	// accessing data of a component is done through a paramenter props
	// props is the convention name for {} storing data given to the component/element
	return <li>{props.todo}</li>
}

export default ToDoListItem
