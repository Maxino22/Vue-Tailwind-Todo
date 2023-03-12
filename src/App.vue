<template>
	<div
		class="text-veryDarkDesaturatedBlue dark:bg-veryDarkBlue dark:text-veryLightGray"
	>
		<section
			class="p-20 flex flex-col items-center justify-center bg-header-mobile-light md:bg-header-desktop-light dark:bg-header-mobile-dark bg-no-repeat bg-cover dark:md:bg-header-desktop-dark"
		>
			<div class="flex items-center justify-between w-[400px]">
				<h3 class="text-white font-normal uppercase tracking-widest text-3xl">
					Todo
				</h3>
				<button @click="toggleDarkmode">
					<img class="h-5" :src="buttonImageUrl" alt="" />
				</button>
			</div>
			<div
				class="w-[400px] mt-7 p-4 flex items-center space-x-7 bg-white dark:bg-veryDarkDesaturatedBlue rounded-lg"
			>
				<input type="checkbox" />
				<input
					type="text"
					class="text-veryDarkBlue dark:text-veryLightGray placeholder:text-veryDarkGreyishBlue dark:placeholder:text-veryLightGrayishBlue"
					placeholder="enter Todo  "
				/>
			</div>
		</section>
		<!-- section todos -->
		<div class="z-20 -mt-14 flex justify-center">
			<div
				v-if="todos.length > 0"
				class="bg-veryLightGray shadow-lg dark:bg-veryDarkDesaturatedBlue w-[400px] rounded-lg p-4"
			>
				<TodoItem />
				<TodoItem />
				<TodoItem />
				<TodoItem />
				<TodoItem />
				<!-- filter -->
				<div class="mt-3 px-1 py-3 flex justify-around"></div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import darkMode from './composables/darkMode'
import TodoItem from './components/TodoItem.vue'

const todos = ref([1, 2])

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
