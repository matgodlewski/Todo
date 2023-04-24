import React from 'react'
import { type Todo } from '../App'

interface PropType {
  todo: Todo
  deleteTodo: (id: number) => void
  updateTodo: (todo: Todo) => void
}

export const TodoRow: React.FC<PropType> = (props) => {
  return (
        <tr>
            <th scope="row">{ props.todo.id }</th>
            <td>{ props.todo.description }</td>
            <td>{ props.todo.assigned }</td>
            <td>
                <button className='btn btn-secondary btn-sm m-1'
                onClick={() => { props.updateTodo(props.todo) }}>
                    Update
                </button>
                <button className='btn btn-danger btn-sm m-1'
                        onClick={() => { props.deleteTodo(props.todo.id) }}>
                    Delete
                </button>
            </td>
        </tr>
  )
}
