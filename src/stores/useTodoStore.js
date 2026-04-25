import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'

export const useTodoStore = defineStore('todo', () => {
	// ■■ STATE ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
	let parsed = []
	try {
		parsed = JSON.parse(localStorage.getItem('todos') || '[]')
	} catch (error) {
		parsed = []
	}
	const todos = ref(parsed)
	const filterType = ref('all') // all | active | done

	// ■■ GETTERS ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
	const filteredTodos = computed(() => {
		switch (filterType.value) {
			case 'active':
				return todos.value.filter(todo => !todo.done)
			case 'done':
				return todos.value.filter(todo => todo.done)
			default:
				return todos.value
		}
	})

	const remaining = computed(() => {
		return todos.value.filter(todo => !todo.done).length
	})

	// ■■ ACTIONS ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
	const addTodo = text => {
		if (!text.trim()) return
		todos.value.push({
			id: Date.now(),
			text: text.trim(),
			done: false,
		})
	}
	const toggleTodo = id => {
		const todo = todos.value.find(t => t.id === id)
		if (todo) {
			todo.done = !todo.done
		}
	}
	const deleteTodo = id => {
		todos.value = todos.value.filter(todo => todo.id !== id)
	}

	const editTodo = (id, newText) => {
		const todo = todos.value.find(t => t.id === id)
		if (todo && newText.trim()) {
			todo.text = newText.trim()
		}
	}

	const clearCompleted = () => {
		todos.value = todos.value.filter(todo => !todo.done)
	}

	const setFilter = newFilter => {
		filterType.value = newFilter
	}
	// ■■ PERSISTENCE ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

	let timer = null

	watch(
		todos,
		item => {
			clearTimeout(timer)
			timer = setTimeout(() => {
				localStorage.setItem('todos', JSON.stringify(item))
			}, 300)
		},
		{ deep: true },
	)

	return {
		todos,
		filterType,
		filteredTodos,
		remaining,
		addTodo,
		toggleTodo,
		deleteTodo,
		editTodo,
		clearCompleted,
		setFilter,
	}
})
