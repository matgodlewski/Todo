import React from 'react'
import { type Todo } from '../App'
import { TodoRow } from './TodoRow'

interface PropType {
  todos: Todo[]
  deleteTodo: (id: number) => void
  updateTodo: (todo: Todo) => void
}

export const TodoTableBody: React.FC<PropType> = (props) => {
  return (
        <tbody>
        {props.todos.map(
          (todo, id: number) => <TodoRow todo={todo} key={id} deleteTodo={props.deleteTodo} updateTodo={props.updateTodo}/>
        )}
        </tbody>
  )
}
