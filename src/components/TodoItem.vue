<script setup>
import { useTodoStore } from '@/stores/useTodoStore'
import { nextTick, ref } from 'vue'

const inputRef = ref(null)
const editText = ref('')
const editing = ref(false)
const todoStore = useTodoStore()
const props = defineProps({
	todo: {
		type: Object,
		required: true,
	},
})

async function startEdit() {
	editing.value = true
	editText.value = props.todo.text
	await nextTick()
	inputRef.value?.focus()
}

function saveEdit() {
	const text = editText.value.trim()
	if (!text) return
	todoStore.editTodo(props.todo.id, editText.value)
	editing.value = false
}
</script>

<template>
	<li class="flex items-center gap-3 p-3 rounded-lg bg-slate-800 border border-slate-700">
		<button
			@click="todoStore.toggleTodo(props.todo.id)"
			:class="[
				'w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0',
				todo.done ? 'bg-emerald-500 border-emerald-500' : 'border-slate-500',
			]"
		>
			<span v-if="props.todo.done" class="text-white text-xl">✓</span>
		</button>

		<span
			v-if="!editing"
			@dblclick="startEdit"
			:class="['flex-1 text-sm', props.todo.done && 'line-through text-slate-500']"
		>
			{{ props.todo.text }}
		</span>

		<input
			v-else
			ref="inputRef"
			type="text"
			v-model="editText"
			@blur="saveEdit"
			@keyup.enter="saveEdit"
			class="flex-1 bg-transparent border-b border-emerald-400 outline-none text-sm text-white"
		/>

		<button
			@click="todoStore.deleteTodo(props.todo.id)"
			class="opacity-50 group flex items-center hover:opacity-100 text-slate-500 hover:text-red-400 transition-all text-lg leading-none"
		>
			X
		</button>
	</li>
</template>
