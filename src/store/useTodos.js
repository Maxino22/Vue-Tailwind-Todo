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

			Active: true,
			completed: true,
		}
	},

	getters: {
		getTodos() {
			return this.todos.filter((todo) => {
				if (this.Active && todo.status === 'incomplete') return true
				if (this.completed && todo.status === 'complete') return true
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
			if (this.newTodo.name) {
				this.todos.unshift(this.newTodo)
			}
			this.newTodo = {
				id: '',
				status: '',
				name: '',
			}
		},

		deleteTodo(id) {
			const toBeDeleted = this.todos.findIndex((todo) => todo.id === id)
			if (toBeDeleted !== -1) {
				this.todos.splice(toBeDeleted, 1)
			}
		},
		showAll() {
			this.completed = true
			this.Active = true
		},
		showActive() {
			this.completed = false
			this.Active = true
		},
		showComplete() {
			this.completed = true
			this.Active = false
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
