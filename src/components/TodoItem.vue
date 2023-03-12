<template>
	<div
		@click="clicked = !clicked"
		class="flex space-x-5 items-center justify-between py-4"
	>
		<div class="flex space-x-2">
			<input type="checkbox" />
			<p>This is todo item one</p>
		</div>
		<div>
			<img src="images/icon-cross.svg" alt="" class="w-3" />
		</div>
	</div>
	<hr class="w-full bg-black" />
</template>

<script setup></script>
