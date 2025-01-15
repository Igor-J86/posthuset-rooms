export const saveLocal = (name:string,item:string) => {
  localStorage.setItem(name, item)
}

export const loadLocal = (name:string) => {
  return localStorage.getItem(name)
}

export const setQueryParam = (queryName:string, value:string) => {
  const searchParams = new URLSearchParams(location.search);
  // Update url with query param
  searchParams.set(queryName, value)
  const newUrl = `${window.location.pathname}?${searchParams.toString()}`
  window.history.replaceState(null, "", newUrl)
}