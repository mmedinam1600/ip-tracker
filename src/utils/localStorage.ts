
if(!localStorage) alert("The local storage is not working, this may cause some failures.");


const setItem = (key: string, payload: any): void => {
  localStorage.setItem(key, JSON.stringify(payload));
}

const getItem = <T> (key: string): T => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null
}

const verifyKeyLocalStorage = (key: string): boolean => {
  return !!localStorage.getItem(key);
}

const utilLocalStorage = {
  setItem,
  getItem,
  verifyKeyLocalStorage
}



export default utilLocalStorage;