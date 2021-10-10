import React, { ReactElement, useEffect, useState } from 'react'
import TodoForm from '../conmponents/TodoForm'
import TodoList from '../conmponents/TodoList'
import { ITodo } from '../interfaces'


declare var confirm: (question: string) => boolean

function TodosPage(): ReactElement {

    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
        setTodos(saved)
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        }
        /* console.log('created todo ID:', newTodo.id) */
        setTodos((prev) => [newTodo, ...prev])
    }

    const completeTodoHandler = (id: number) => {
        setTodos(prev => prev.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        }))
    }

    const removeTodoHandler = (event: React.MouseEvent, id: number) => {
        console.log('del click', event)
        event.stopPropagation() //bubling stop!
        event.preventDefault()
        const shouldDelete = confirm('Are you sure?')
        /* const shouldDelete = window.confirm('Are you sure?') */
        if (shouldDelete) {
            setTodos(prev => prev.filter(el => el.id !== id))
        }
    }
    /* console.log('todos to render list', todos) */

    return (
        <div className="container">
            <TodoForm onAdd={addHandler} />
            <TodoList todos={todos} onToggle={completeTodoHandler} onRemove={removeTodoHandler} />
        </div>
    )
}

export default TodosPage
