<script setup>
import AddTodoForm from './components/AddTodoForm.vue'
import FilterBar from './components/FilterBar.vue'
import TodoList from './components/TodoList.vue'
</script>

<template>
	<div class="min-h-screen bg-slate-950 flex items-center justify-center">
		<div
			class="w-full max-w-xl bg-slate-900 border border-slate-700 shadow-lg rounded-2xl overflow-hidden"
		>
			<!-- Header -->
			<header class="border-b px-6 py-4">
				<h1 class="text-2xl font-bold text-center">Todo App</h1>
			</header>

			<!-- Content -->
			<main class="p-6 space-y-4">
				<AddTodoForm />
				<FilterBar />
				<TodoList />
			</main>
		</div>
	</div>
</template>
