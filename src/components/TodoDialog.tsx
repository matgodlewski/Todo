import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import { type Todo } from '../App'

interface PropType {
  currentTodo: Todo
  actions: {
    create: (description: string, assigned: string) => void
    update: (todo: Todo) => void
    close: () => void
  }
  open: boolean
}

export const TodoDialog: React.FC<PropType> = (props) => {
  interface StateType {
    description: string
    assigned: string
  }

  const initialState: StateType = {
    description: props.currentTodo !== null ? props.currentTodo.description : '',
    assigned: props.currentTodo !== null ? props.currentTodo.assigned : ''
  }

  const [state, setState] = useState(initialState)

  const handleClose = (): void => {
    props.actions.close()
  }

  return (
        <div>
            <Dialog open={props.open} onClose={handleClose}>

            </Dialog>
        </div>
  )
}
