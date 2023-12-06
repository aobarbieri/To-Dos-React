export default function NewEmotionForm(props) {
	return (
		<>
			<form>
				<label>NAME</label>
				<input name='name' onChange={props.addEmotion} />
				<label>EMOTION</label>
				<select name='emotion'>
					<option value='😁'>Happy</option>
					<option value='😐'>Neutral</option>
					<option value='😠'>Angry</option>
				</select>
			</form>
		</>
	)
}
