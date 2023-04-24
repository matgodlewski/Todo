import React, { useEffect, useState } from 'react'
import { type Todo } from '../App'

interface PropType {
  actions: {
    create: (description: string, assigned: string) => void
    update: (todo: Todo) => void
  }
  currentTodo: Todo | null
  formButtonText: string
}

export const AddNewTodoForm: React.FC<PropType> = (props) => {
  interface StateType {
    assigned: string
    description: string
  }

  const initialState: StateType = {
    assigned: (props.currentTodo != null) ? props.currentTodo.assigned : '',
    description: (props.currentTodo != null) ? props.currentTodo.description : ''
  }

  const [state, setState] = useState(initialState)

  useEffect(() => {
    setState({
      assigned: (props.currentTodo != null) ? props.currentTodo.assigned : '',
      description: (props.currentTodo != null) ? props.currentTodo.description : ''
    })
  }, [props.currentTodo])

  const onSubmit = (): void => {
    if (state.assigned !== '') {
      if (props.currentTodo !== null) {
        props.actions.update({ id: props.currentTodo.id, description: state.description, assigned: state.assigned })
      } else {
        props.actions.create(state.assigned, state.description)
        setState(initialState)
      }
    }
  }

  return (
        <div className='mt-5'>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>
                        Assigned
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        required
                        onChange={event => {
                          setState({ ...state, assigned: event.target.value })
                        }}
                        value={state.assigned}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>
                        Description
                    </label>
                    <textarea
                        className='form-control'
                        rows={3}
                        required
                        onChange={event => {
                          setState({ ...state, description: event.target.value })
                        }}
                        value={state.description}
                    />
                </div>
                <button
                    type='button'
                    className='btn btn-success mt-3'
                    onClick={onSubmit}
                >
                    {props.formButtonText}
                </button>
            </form>
        </div>
  )
}
