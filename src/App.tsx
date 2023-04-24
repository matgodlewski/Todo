import React, { useState } from 'react'
import { TodoTable } from './components/TodoTable'
import { AddNewTodoForm } from './components/AddNewTodoForm'

export interface Todo {
  id: number
  description: string
  assigned: string
}

interface StateType {
  showAddTodoForm: boolean
  currentTodo: Todo | null
  formButtonText: string
  todos: Todo[]
}

export const App: React.FC = () => {
  const initialTodos: Todo[] = [
    { id: 1, description: 'Feed dog', assigned: 'Mateusz' },
    { id: 2, description: 'Clean room', assigned: 'Wiktoria' },
    { id: 3, description: 'Fix Tv', assigned: 'Jan' }
  ]

  const initialState: StateType = {
    showAddTodoForm: false,
    currentTodo: null,
    formButtonText: 'Add todo',
    todos: initialTodos
  }

  const [state, setState] = useState(initialState)

  const addTodo = (description: string, assigned: string): void => {
    setState({
      ...state,
      todos: [
        ...state.todos,
        {
          id: state.todos.length > 0 ? state.todos[state.todos.length - 1].id + 1 : 1,
          description,
          assigned
        }
      ]
    })
  }

  const deleteTodo = (id: number): void => {
    setState({
      ...state,
      todos: state.todos.filter(todo => todo.id !== id),
      currentTodo: id === state.currentTodo?.id ? null : state.currentTodo,
      showAddTodoForm: id === state.currentTodo?.id ? false : state.showAddTodoForm
    })
  }

  const changeFormVisibility = (): void => {
    setState({
      ...state,
      showAddTodoForm: !state.showAddTodoForm,
      currentTodo: state.showAddTodoForm ? null : state.currentTodo,
      formButtonText: 'Add todo'
    })
  }

  const onTodoUpdateClick = (todo: Todo): void => {
    setState({
      ...state,
      currentTodo: todo,
      showAddTodoForm: state.showAddTodoForm ? state.showAddTodoForm : true,
      formButtonText: 'Update todo'
    })
  }

  const updateTodo = (todo: Todo): void => {
    setState({
      ...state,
      todos: state.todos.map(t => t.id === todo.id ? todo : t),
      currentTodo: todo
    })
  }

  return (
        <div className="mt-5 container">
            <div className="card">
                <div className="card-header">
                    Your Todos
                </div>
                <div className="card-body">
                    {state.showAddTodoForm &&
                        <AddNewTodoForm actions={{ create: addTodo, update: updateTodo }} currentTodo={state.currentTodo}
                                        formButtonText={state.formButtonText}/>}
                    <button className="btn btn-primary mt-1" onClick={changeFormVisibility}>
                        {state.showAddTodoForm ? 'Hide Form' : 'Add Todo'}
                    </button>
                    {state.todos.length > 0 &&
                        <TodoTable todos={state.todos} deleteTodo={deleteTodo} updateTodo={onTodoUpdateClick}/>
                    }
                </div>
            </div>
        </div>
  )
}
