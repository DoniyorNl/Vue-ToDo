<script setup>
import { useTodoStore } from '@/stores/useTodoStore'
import { ref } from 'vue'

const store = useTodoStore()
const text = ref('')

const add = () => {
	store.addTodo(text.value)
	text.value = ''
}
</script>

<template>
	<div class="flex gap-2 mb-4">
		<input
			v-model="text"
			@keyup.enter="add"
			placeholder="Yangi task..."
			class="flex-1 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:border-emerald-400 text-white"
		/>
		<button
			@click="add"
			class="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 rounded-lg font-semibold transition-colors"
		>
			Add
		</button>
	</div>
</template>
