<template>
	<div class="rounded-lg">
		<table
			class="bg-veryLightGray dark:bg-veryDarkBlue text-lg text-left w-[400px] md:w-[660px] text-gray-500 rounded-xl"
		>
			<draggable v-model="todos">
				<tbody>
					<tr
						v-for="todo in todos"
						:key="todo.id"
						class="border-b bg-veryLightGray dark:bg-veryDarkDesaturatedBlue shadow-lg dark:border-gray-700"
					>
						<th
							scope="row"
							class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>
							<input type="checkbox" :checked="todo.status === 'complete'" />
						</th>
						<td class="py-4">{{ todo.name }}</td>
					</tr>
				</tbody>
			</draggable>
		</table>
	</div>
</template>

<script setup>
import draggable from 'vuedraggable'
import { ref } from 'vue'

const todos = ref([
	{ id: 1, name: 'Jog around the park 3x', status: 'complete' },
	{ id: 1, name: '10 minutes meditation', status: 'complete' },
	{ id: 1, name: 'Read for one hour', status: 'complete' },
	{ id: 1, name: 'complete Todo App on frontend Mentor', status: 'complete' },
])
</script>
