<template>
	<div
		class="text-veryDarkDesaturatedBlue dark:bg-veryDarkBlue dark:text-veryLightGray"
	>
		<section
			class="p-20 flex flex-col items-center justify-center bg-header-mobile-light md:bg-header-desktop-light dark:bg-header-mobile-dark bg-no-repeat bg-cover dark:md:bg-header-desktop-dark"
		>
			<div class="flex items-center justify-between w-[450px] md:w-[600px]">
				<h3 class="text-white font-normal uppercase tracking-widest text-3xl">
					Todo
				</h3>
				<button @click="toggleDarkmode">
					<img class="h-5" :src="buttonImageUrl" alt="" />
				</button>
			</div>
			<div
				class="w-[450px] md:w-[660px] mt-7 p-4 flex items-center space-x-7 bg-veryLightGray dark:bg-veryDarkDesaturatedBlue rounded-lg"
			>
				<input v-model="store.newTodo.status" type="checkbox" />
				<input
					@keyup.enter="addTodo"
					type="text"
					v-model="store.newTodo.name"
					class="text-veryDarkBlue dark:text-veryLightGray placeholder:text-veryDarkGreyishBlue dark:placeholder:text-veryLightGrayishBlue"
					placeholder="enter Todo  "
				/>
			</div>
		</section>
		<!-- section todos -->
		<div class="z-20 -mt-14 flex justify-center">
			<TodoTable />
		</div>
	</div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import darkMode from './composables/darkMode'
import TodoTable from './components/TodoTable.vue'
import useTodos from './store/useTodos'

const store = useTodos()

function addTodo() {
	store.addTodo()
}

const isDarkMode = ref(null)
const buttonImageUrl = computed(() => {
	if (isDarkMode.value) {
		return 'images/icon-sun.svg'
	} else {
		return 'images/icon-moon.svg'
	}
})

const toggleDarkmode = () => {
	document.documentElement.classList.toggle('dark')
	isDarkMode.value = !isDarkMode.value
}

// set mode
onMounted(() => {
	if (darkMode) {
		document.documentElement.classList.add('dark')
		isDarkMode.value = true
	} else {
		document.documentElement.classList.remove('dark')
		isDarkMode.value = false
	}
})
</script>
