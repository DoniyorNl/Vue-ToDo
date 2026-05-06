# Vue ToDo

## Tech Stack
- Vue 3
- Vite
- Pinia
- Tailwind CSS
- `@vueuse/core`
- `lucide-vue-next`
- `clsx` + `class-variance-authority`
- `tailwind-merge`
- `reka-ui`
- `tw-animate-css`

## Project Overview
Vue ToDo is a modern, dark-themed task manager built with Vue 3 and Vite. It provides a clean interface for creating, editing, completing, filtering, and deleting tasks, with local browser persistence so your list stays saved.

## Features
- Add new todo items
- Mark todos as complete / incomplete
- Edit todo text inline by double-clicking
- Delete individual todos
- Filter tasks by all, active, or completed
- Clear completed tasks
- Persistent state using `localStorage`
- Smooth list transitions and responsive styling

## Folder Structure
- `src/App.vue` – main app layout and page wrapper
- `src/main.js` – Vue app bootstrap with Pinia
- `src/store/useTodoStore.js` – centralized todo state and actions
- `src/components/AddTodoForm.vue` – todo input form
- `src/components/FilterBar.vue` – filter buttons
- `src/components/TodoList.vue` – rendered todo list
- `src/components/TodoItem.vue` – individual todo item with edit/delete controls

## Installation
```bash
pnpm install
```

## Development
```bash
pnpm dev
```

## Build
```bash
pnpm build
```

## Notes
This project uses `Pinia` for state management and `Tailwind CSS` for styling. The todo list state is saved automatically to `localStorage`, so tasks remain available after browser refresh.
