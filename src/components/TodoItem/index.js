import './index.css'

const TodoItem = props => {
  const {todoDetails} = props
  const {id, title} = todoDetails

  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <button type="button" className="delete-btn">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
