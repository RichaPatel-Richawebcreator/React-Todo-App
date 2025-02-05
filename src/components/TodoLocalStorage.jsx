export const getLocalStorageTodoData = () => {
  const rowData = localStorage.getItem("TodoData")
  if (!rowData) return []
  return JSON.parse(rowData);
}

export const setLocalStorageTodoData = (task) => {
  return localStorage.setItem("TodoData", JSON.stringify(task))
}