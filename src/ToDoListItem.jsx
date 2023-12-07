const ToDoListItem = (props) => {
	const todoCompleted = () => {
		props.setToCompleted(props)
	}

	return (
		<li
			className='ToDoListItem flex-start-center '
			style={{
				backgroundColor: props.index % 2 ? 'lavender' : 'plum',
			}}>
			<span className='index-label flex-center-center'>{props.index + 1}</span>
			<span className={props.todo.completed ? 'line-through' : ''}>{props.todo.text}</span>
			{props.todo.completed ? <button>❌</button> : <button onClick={() => todoCompleted()}>✔️</button>}
		</li>
	)
}

export default ToDoListItem
