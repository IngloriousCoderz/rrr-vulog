const URL = 'http://localhost:3001/todos'

export const fetchTodos = async () => {
  const response = await fetch(URL)
  const todos = await response.json()
  return todos
}

export const postTodo = async todo => {
  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(todo),
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  })
  const newTodo = await response.json()
  return newTodo
}

export const patchTodo = async (id, patch) => {
  await fetch(`${URL}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(patch),
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  })
}

export const deleteTodo = async id => {
  await fetch(`${URL}/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  })
}
