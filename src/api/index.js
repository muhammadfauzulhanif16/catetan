const BASE_URL = 'https://notes-api.dicoding.dev/v1'

export const getAccessToken = () => {
  return localStorage.getItem('catetan-token')
}

export const editAccessToken = (accessToken) => {
  return localStorage.setItem('catetan-token', accessToken)
}

export const fetchWithToken = async (url, options = {}) => {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`
    }
  })
}

export const logInUser = async ({ email, password }) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })

  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    return { error: true, data: null }
  }

  return { error: false, data: responseJson }
}

export const registerUser = async ({ name, email, password }) => {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  })

  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    return { error: true, data: responseJson }
  }

  return { error: false, data: responseJson }
}

async function getUserLogged () {
  const response = await fetchWithToken(`${BASE_URL}/users/me`)
  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    return { error: true, data: null }
  }

  return { error: false, data: responseJson.data }
}

export const addNote = async ({ title, body }) => {
  const response = await fetchWithToken(`${BASE_URL}/notes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body })
  })

  const responseJson = await response.json()
  console.log(responseJson)
  if (responseJson.status !== 'success') {
    return { error: true, data: responseJson }
  }

  return { error: false, data: responseJson }
}

async function getNotes () {
  const response = await fetchWithToken(`${BASE_URL}/notes`)
  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    return { error: true, data: [] }
  }

  return { error: false, data: responseJson.data }
}

export const deleteNote = async (id) => {
  const response = await fetchWithToken(`${BASE_URL}/notes/${id}`, {
    method: 'DELETE'
  })

  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    return { error: true, data: responseJson }
  }

  return { error: false, data: responseJson }
}

export { getUserLogged, getNotes }
