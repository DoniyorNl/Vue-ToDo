<script setup>
import AddTodoForm from './components/AddTodoForm.vue'
import FilterBar from './components/FilterBar.vue'
import TodoList from './components/TodoList.vue'
</script>

<template>
	<div class="min-h-screen bg-slate-900 text-white p-4">
		<div class="max-w-md mx-auto">
			<h1 class="text-3xl font-bold text-center text-emerald-400 mb-6">■ Vue Todo</h1>
			<AddTodoForm />
			<FilterBar />
			<TodoList />
		</div>
	</div>
</template>
<style scoped></style>
