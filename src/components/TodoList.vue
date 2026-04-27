<script setup>
import { useTodoStore } from '@/store/useTodoStore'
import TodoItem from './TodoItem.vue'

const store = useTodoStore()
</script>

<template>
	<div>
		<TransitionGroup name="list" tag="ul" class="space-y-2">
			<TodoItem v-for="todo in store.filteredTodos" :key="todo.id" :todo="todo" />
		</TransitionGroup>
		<p v-if="store.filteredTodos.length === 0" class="text-center text-slate-300 py-8">
			Bo\'sh! Task qo\'shing
		</p>
		<div class="flex justify-between text-sm text-slate-300 mt-4">
			<span>{{ store.remaining }} task qoldi</span>
			<button
				@click="store.clearCompleted"
				class="text-slate-300 hover:text-red-300 transition-colors"
			>
				Bajarilganlarni o\'chir
			</button>
		</div>
	</div>
</template>

<!--  -->
<style scoped>
.list-enter-active,
.list-leave-active {
	transition: all 0.3s ease;
}
.list-enter-from {
	opacity: 0;
	transform: translateX(-20px);
}
.list-leave-to {
	opacity: 0;
	transform: translateX(20px);
}
</style>
