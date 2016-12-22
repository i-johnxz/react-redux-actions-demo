import 'whatwg-fetch'
import qs from 'qs'

const checkStatus = response => {
  if (response.ok) return response
  else {
    const error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

const parseJSON = response => response.json()

export function get(path, query) {
  const input = `/seopapi/seop.foundation/api/${path}${query ? '?' + qs.stringify(query) : ''}`
  console.log(input)
  const init = {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  }
  return window.fetch(input, init)
    .then(checkStatus)
    .then(parseJSON)
}

export function post(input, init = {}) {
  const _init = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    ...init
  }
  return window.fetch(`/api/${input}`, _init)
    .then(checkStatus)
    .then(parseJSON)
}
