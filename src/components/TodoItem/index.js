const TodoItem = props => {
  const {todoDetails} = props
  const {id, title} = todoDetails

  return (
    <li>
      <p>{title}</p>
    </li>
  )
}

export default TodoItem
