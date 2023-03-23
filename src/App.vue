<template>
	<div
		class="relative text-veryDarkDesaturatedBlue dark:bg-veryDarkBlue dark:text-veryLightGray"
	>
		<section
			class="p-20 flex flex-col items-center justify-center bg-header-mobile-light md:bg-header-desktop-light dark:bg-header-mobile-dark bg-no-repeat bg-cover dark:md:bg-header-desktop-dark"
		>
			<div class="flex items-center justify-between w-[300px] md:w-[600px]">
				<h3 class="text-white font-normal uppercase tracking-widest text-3xl">
					Todo
				</h3>
				<button @click="toggleDarkmode">
					<img class="h-5" :src="buttonImageUrl" alt="" />
				</button>
			</div>
			<transition name="error">
				<div
					v-if="TodoError"
					class="absolute opacity-80 top-20 bg-red-500 rounded-md text-white text-center px-4 py-3"
				>
					Adding Todo Failed!! Please try again!!
				</div>
			</transition>
			<div></div>
			<div
				class="w-[350px] md:w-[660px] mt-7 p-4 flex items-center space-x-7 bg-veryLightGray dark:bg-veryDarkDesaturatedBlue rounded-lg"
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
		<transition name="switch" mode="out-in">
			<div v-if="store.todos.length">
				<div class="z-20 -mt-14 flex justify-center">
					<TodoTable />
				</div>
				<p
					class="text-center text-veryDarkGreyishBlueDM dark:text-veryLightGrayishBlue mt-2"
				>
					Drag and Drop to reorder list
				</p>
			</div>
			<p v-else class="text-red-300 text-center">No todos to display</p>
		</transition>
	</div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import darkMode from './composables/darkMode'
import TodoTable from './components/TodoTable.vue'
import useTodos from './store/useTodos'

const TodoError = ref(false)
const store = useTodos()

function addTodo() {
	if (!store.newTodo.name) {
		TodoError.value = true
		setTimeout(() => (TodoError.value = false), 3000)
	}
	store.addTodo()
}

const isDarkMode = ref(null)
const buttonImageUrl = computed(() => {
	if (isDarkMode.value) {
		return 'assets/images/icon-sun.svg'
	} else {
		return 'assets/images/icon-moon.svg'
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

<style>
/* enyer */
/* .error-enter-from {
	opacity: 0;
	transform: translateY(-60px);
}
.error-enter-to {
	opacity: 1;
	transform: translateY(0); */
/* } */
.error-enter-active {
	/* transition: all 0.3s ease-in; */
	animation: wobble 0.5s;
}
/* leave classes */
.error-leave-from {
	opacity: 1;
	transform: translateY(0);
}
.error-leave-to {
	opacity: 0;
	transform: translateY(-60px);
}

.error-leave-active {
	transition: all 0.3s ease-in;
}

@keyframes wobble {
	0% {
		transform: translateY(-60px);
		opacity: 0;
	}
	50% {
		transform: translateY(0px);
		opacity: 1;
	}
	60% {
		transform: translateX(8px);
	}
	70% {
		transform: translateX(-8px);
	}
	80% {
		transform: translateX(4px);
	}
	90% {
		transform: translateX(-4px);
	}
	100% {
		transform: translate(0);
	}
}

/* swith transition */
.switch-enter-from,
.switch-enter-to {
	opacity: 0;
	transform: translateY(20px);
}
/* .switch-enter-to,
.switch-leave-to {
	opacity: 1;
	transform: translateY(0);
} */

.switch-enter-active {
	transition: all 0.3s ease;
}
.switch-leave-active {
	transition: all 0.3s ease;
}
</style>
