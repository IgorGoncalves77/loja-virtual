
export function getCategories() {
  return new Promise(function (resolve, reject) {
    fetch('./categories/list', {headers: {
      Accept: "application/json"
    }})
      .then(response => response.json())
      .then(data => resolve(data.items))
      .catch(reject)
  })
}

export function getProductsByCategory(category) {
  return new Promise(function (resolve, reject) {
    fetch(`./categories/${category}`, {headers: {
      Accept: "application/json"
    }})
      .then(response => response.json())
      .then(data => resolve(data.items))
      .catch(reject)
  })
}

export function getFiltersByCategory(category) {
  return new Promise(function (resolve, reject) {
    fetch(`./categories/${category}`, {headers: {
      Accept: "application/json"
    }})
      .then(response => response.json())
      .then(data => resolve(data.filters))
      .catch(reject)
  })
}