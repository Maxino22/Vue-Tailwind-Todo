import { defineStore } from 'pinia'

const useTodos = defineStore('todos', {
	state: () => {
		return {
			newTodo: {
				id: null,
				name: '',
				status: null,
			},
			todos: [
				{ id: 1, name: 'Jog around the park 3x', status: 'incomplete' },
				{ id: 2, name: '10 minutes meditation', status: 'incomplete' },
				{ id: 3, name: 'Read for one hour', status: 'incomplete' },
				{
					id: 4,
					name: 'complete Todo App on frontend Mentor',
					status: 'complete',
				},
			],
			All: true,
			Active: false,
			completed: false,
		}
	},

	getters: {
		getTodos() {
			return this.todos.filter((todo) => {
				if (this.Active && todo.status === 'incomplete') return true
				if (this.completed && todo.status === 'complete') return true
				if (this.All) return true
			})
		},
		incomplete() {
			return this.todos.filter((todo) => {
				if (todo.status === 'incomplete') return true
			})
		},
	},
	actions: {
		updateTodos(todos) {
			this.todos = todos
		},
		addTodo() {
			const newId = this.todos.length + 1
			this.newTodo.id = newId
			this.newTodo.status =
				this.newTodo.status === true ? 'complete' : 'incomplete'
			this.todos.unshift(this.newTodo)
			this.newTodo = {
				id: '',
				status: '',
				name: '',
			}
		},
		clearComplete() {
			const filteredCompleted = this.todos.filter(
				(todo) => todo.status !== 'complete'
			)
			this.todos.splice(0, this.todos.length, ...filteredCompleted)
		},
	},
})

export default useTodos
