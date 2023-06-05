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

export const getUserLogged = async () => {
  const response = await fetchWithToken(`${BASE_URL}/users/me`)
  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    return { error: true, data: null }
  }

  return { error: false, data: responseJson.data }
}

export const addNote = async ({ name, tag }) => {
  const response = await fetchWithToken(`${BASE_URL}/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, tag })
  })

  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    alert(responseJson.message)
    return { error: true }
  }

  return { error: false }
}

export const getNotes = async () => {
  const response = await fetchWithToken(`${BASE_URL}/contacts`)
  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    alert(responseJson.message)
    return { error: true, data: [] }
  }

  return { error: false, data: responseJson.data }
}

export const deleteNote = async (id) => {
  const response = await fetchWithToken(`${BASE_URL}/contacts/${id}`, {
    method: 'DELETE'
  })

  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    return { error: true, data: responseJson }
  }

  return { error: false, data: responseJson }
}
