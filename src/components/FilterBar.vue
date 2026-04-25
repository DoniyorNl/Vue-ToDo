<script setup>
import { useTodoStore } from '@/stores/useTodoStore'

const store = useTodoStore()
const filters = [
	{ value: 'all', label: 'All' },
	{ value: 'active', label: 'Active' },
	{ value: 'done', label: 'Done' },
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
					? 'bg-emerald-500 text-white'
					: 'bg-slate-800 text-slate-400 hover:text-white',
			]"
		>
			{{ f.label }}
		</button>
	</div>
</template>
