export const saveLocal = (name:string,item:string) => {
  localStorage.setItem(name, item)
}

export const loadLocal = (name:string) => {
  return localStorage.getItem(name)
}