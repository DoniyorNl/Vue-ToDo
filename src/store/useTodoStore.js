import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'

export const useTodoStore = defineStore('todo', () => {
	// State
	const todos = ref(JSON.parse(localStorage.getItem('todos')) || [])
	const filter = ref('all') // all / active / done
	// Getter
	const filteredTodos = computed(() => {
		switch (filter.value) {
			case 'active':
				return todos.value.filter(todo => !todo.done)
			case 'done':
				return todos.value.filter(todo => todo.done)
			default:
				return todos.value
		}
	})
	const remainingTodos = computed(() => {
		return todos.value.filter(todo => !todo.done)
	})
	//  actions
	const addTodo = text => {
		if (!text.trim()) return
		todos.value.push({
			id: Date.now(),
			text: text.trim(),
			done: false,
		})
	}
	const toggleTodo = id => {
		const todo = todos.value.find(todo => todo.id === id)
		if (todo) {
			todo.done = !todo.done
		}
	}
	const deleteTodo = id => {
		todos.value = todos.value.filter(todo => todo.id !== id)
	}

	const editTodo = (id, newText) => {
		const todo = todos.value.find(todo => todo.id === id)
		if (todo && newText.trim()) {
			todo.text = newText.trim()
		}
	}

	const clearCompleted = () => {
		todos.value = todos.value.filter(todo => !todo.done)
	}

	const setFilter = newFilter => {
		filter.value = newFilter
	}
	// persistent
	watch(
		todos,
		val => {
			localStorage.setItem('todos', JSON.stringify(val))
		},
		{ deep: true },
	)

	return {
		todos,
		filter,
		filteredTodos,
		remainingTodos,
		addTodo,
		toggleTodo,
		deleteTodo,
		editTodo,
		clearCompleted,
		setFilter,
	}
})
