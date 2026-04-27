<script setup>
import { useTodoStore } from '@/store/useTodoStore'
import { nextTick, ref } from 'vue'
//
const props = defineProps({ todo: Object })
const store = useTodoStore()
const editing = ref(false)
const editText = ref('')
const inputRef = ref(null)

// Start editing the todo item
async function startEdit() {
	editing.value = true
	editText.value = props.todo.text
	await nextTick()
	inputRef.value?.focus()
}
// Save the edited todo item
function saveEdit() {
	store.editTodo(props.todo.id, editText.value)
	editing.value = false
}
</script>

<template>
	<li class="flex items-center gap-3 p-3 rounded-lg bg-slate-900 border border-slate-700 group">
		<!-- Checkbox -->
		<button
			@click="store.toggleTodo(props.todo.id)"
			:class="[
				'w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors shrink-0',
				props.todo.done ? 'bg-emerald-500 border-emerald-500' : 'border-slate-500',
			]"
		>
			<span v-if="props.todo.done" class="text-white text-xs">✓</span>
		</button>

		<!-- Text (editable) -->
		<span
			v-if="!editing"
			@dblclick="startEdit"
			:class="[
				'flex-1 text-sm',
				props.todo.done ? 'line-through text-slate-500' : 'text-slate-100',
			]"
		>
			{{ props.todo.text }}
		</span>
		<input
			v-else
			ref="inputRef"
			v-model="editText"
			@blur="saveEdit"
			@keyup.enter="saveEdit"
			@keyup.escape="editing = false"
			class="flex-1 bg-transparent border-b border-emerald-400 outline-none text-sm text-white"
		/>
		<!-- Delete -->
		<button
			@click="store.deleteTodo(props.todo.id)"
			class="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-300 transition-all text-lg leading-none"
		>
			×
		</button>
	</li>
</template>

<style scoped></style>
