<script setup>
import { useTodoStore } from '@/store/useTodoStore'

const store = useTodoStore()
const filters = [
	{ label: 'All', value: 'all' },
	{ label: 'Active', value: 'active' },
	{ label: 'Completed', value: 'completed' },
]
</script>

<template>
	<div class="flex gap-1 mb-4">
		<button
			v-for="f in filters"
			:key="f.value"
			@click="store.setFilter(f.value)"
			:class="[
				'flex-1 py-1.5 rounded-lg text-sm font-medium transition-colors',
				store.filter === f.value
					? 'bg-emerald-500 text-slate-950'
					: 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-slate-100',
			]"
		>
			{{ f.label }}
		</button>
	</div>
</template>

<style scoped></style>
