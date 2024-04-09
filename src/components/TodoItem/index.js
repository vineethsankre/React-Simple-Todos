import './index.css'

const TodoItem = props => {
  const {todoDetails} = props
  const {id, title} = todoDetails

  return (
    <li className="todo-item">
      <p className="title">{title}</p>
    </li>
  )
}

export default TodoItem
