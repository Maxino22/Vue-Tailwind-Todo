<template>
	<div class="rounded-lg">
		<table
			class="bg-veryLightGray dark:bg-veryDarkBlue text-lg text-left text-gray-500 rounded-xl"
		>
			<tbody>
				<draggable
					v-model="myTodos"
					item-key="todo"
					@start="drag = true"
					@end="drag = false"
				>
					<template #item="todo">
						<tr
							class="border-b flex items-center bg-veryLightGray dark:bg-veryDarkDesaturatedBlue shadow-lg dark:border-gray-700"
						>
							<th
								scope="row"
								class="px-4 py-4 font-medium text-veryDarkGreyishBlue whitespace-nowrap dark:text-white"
							>
								<input
									type="checkbox"
									@click="markTodo(todo.element)"
									:checked="todo.element.status === 'complete'"
								/>
							</th>
							<td
								:class="textStyle(todo.element)"
								class="flex items-center justify-between py-4 pr-3 w-[300px] md:w-[600px] rounded"
							>
								{{ todo.element.name }}
								<button @click="deleteTodo(todo.element.id)" class="group">
									<img
										class="h-5 opacity-100 md:opacity-0 group-hover:opacity-100"
										src="../../public/assets/images/icon-cross.svg"
										alt=""
									/>
								</button>
							</td>
						</tr>
					</template>
				</draggable>
			</tbody>
		</table>
		<div
			class="hidden md:flex justify-between items-center rounded-b-lg shadow-md bg-veryLightGray dark:bg-veryDarkDesaturatedBlue px-5 py-4"
		>
			<p class="text-md">{{ store.incomplete.length }} items left</p>
			<div class="flex space-x-3">
				<p
					@click="store.showAll"
					class="text-md cursor-pointer hover:text-veryDarkGreyishBlueDM dark:hover:text-veryDarkGreyishBlue"
				>
					All
				</p>
				<p
					@click="store.showActive"
					class="text-md cursor-pointer hover:text-veryDarkGreyishBlueDM dark:hover:text-veryDarkGreyishBlue"
				>
					Active
				</p>
				<p
					@click="store.showComplete"
					class="text-md cursor-pointer hover:text-veryDarkGreyishBlueDM dark:hover:text-veryDarkGreyishBlue"
				>
					Completed
				</p>
			</div>

			<p @click="store.clearComplete" class="text-md">Clear Completed</p>
		</div>
		<!-- mobile -->
		<div
			class="md:hidden w-[352px] flex justify-between items-center rounded-b-lg shadow-md bg-veryLightGray dark:bg-veryDarkDesaturatedBlue px-5 py-4"
		>
			<p class="text-md">{{ store.incomplete.length }} items left</p>

			<p @click="store.clearComplete" class="text-md">Clear Completed</p>
		</div>

		<div
			class="md:hidden w-[352px] flex items-center justify-center space-x-4 mt-4 rounded-lg shadow-md bg-veryLightGray dark:bg-veryDarkDesaturatedBlue px-5 py-4"
		>
			<p
				class="text-md hover:text-veryDarkGreyishBlueDM dark:hover:text-veryDarkGreyishBlue"
			>
				All
			</p>
			<p @click="store.showActive" class="text-md">Active</p>
			<p
				@click="store.showComplete"
				class="text-md pointer dark:hover:text-veryDarkGreyishBlue"
			>
				Completed
			</p>
		</div>
	</div>
</template>

<script setup>
import draggable from 'vuedraggable'
import { ref, computed } from 'vue'
import useTodos from '../store/useTodos'

const drag = ref(false)

const store = useTodos()

const textStyle = (todo) => {
	return todo.status === 'complete'
		? 'line-through text-veryDarkGreyishBlueDM '
		: 'text-veryDarkGreyishBlue whitespace-nowrap dark:text-veryLightGray'
}

const myTodos = computed({
	get() {
		return store.getTodos
	},
	set(value) {
		store.updateTodos(value)
	},
})

const showActive = () => {
	store.Active = store.todos.filter((todo) => todo.status !== 'complete')
	store.completed = null
}

const showCompleted = () => {
	store.completed = store.todos.filter((todo) => todo.status !== 'complete')
	store.Active = null
}

function deleteTodo(todoId) {
	store.deleteTodo(todoId)
}

// Watch for changes in store.active and store.completed

const markTodo = (todo) => {
	const updatedTodo = {
		...todo,
		status: todo.status === 'complete' ? 'incomplete' : 'complete',
	}
	const index = store.todos.findIndex((t) => t.id === todo.id)
	store.todos[index] = updatedTodo
}
</script>
