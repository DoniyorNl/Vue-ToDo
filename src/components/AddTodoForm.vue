<script setup>
import { useTodoStore } from '@/store/useTodoStore'
import { ref } from 'vue'
import Button from './ui/button/Button.vue'
import Input from './ui/input/Input.vue'

const todoStore = useTodoStore()
const text = ref('')

const add = () => {
	todoStore.addTodo(text.value)
	text.value = ''
}
</script>

<template>
	<div class="flex gap-2 mb-4">
		<Input
			v-model="text"
			@keyup.enter="add"
			placeholder="Yangi task qo\'sh..."
			class="flex-1 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:border-emerald-400 text-slate-100 placeholder:text-slate-400"
		/>
		<Button
			@click="add"
			class="px-4 py-2 bg-emerald-500 text-slate-950 hover:bg-emerald-400 rounded-lg font-semibold transition-colors"
		>
			Add
		</Button>
	</div>
</template>

<style scoped></style>
