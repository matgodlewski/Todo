import React from 'react'
import { type Todo } from '../App'
import { TodoTableHead } from './TodoTableHead'
import { TodoTableBody } from './TodoTableBody'

interface PropType {
  todos: Todo[]
  deleteTodo: (id: number) => void
  updateTodo: (todo: Todo) => void
}

export const TodoTable: React.FC<PropType> = (props) => {
  return (
        <table className="table table-hover">
            <TodoTableHead/>
            <TodoTableBody {...props} />
        </table>
  )
}
