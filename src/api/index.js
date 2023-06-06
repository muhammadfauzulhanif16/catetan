const BASE_URL = 'https://notes-api.dicoding.dev/v1'

export const getAccessToken = () => {
  return localStorage.getItem('catetan-token')
}

export const editAccessToken = (accessToken) => {
  return localStorage.setItem('catetan-token', accessToken)
}

export const fetchWithToken = async (url, options = {}) => {
  // if (!getAccessToken()) {
  //   return null
  // }

  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`
    }
  })
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

export const getUserLogged = async () => {
  if (!getAccessToken()) {
    return { error: true, data: null }
  }

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

  if (responseJson.status !== 'success') {
    return { error: true, data: responseJson }
  }

  return { error: false, data: responseJson }
}

export const getActiveNotes = async () => {
  if (!getAccessToken()) {
    return { error: true, data: [] }
  }

  const response = await fetchWithToken(`${BASE_URL}/notes`)
  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    return { error: true, data: [] }
  }

  return { error: false, data: responseJson.data }
}

export const getArchiveNotes = async () => {
  if (!getAccessToken()) {
    return { error: true, data: [] }
  }

  const response = await fetchWithToken(`${BASE_URL}/notes/archived`)
  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    return { error: true, data: [] }
  }

  return { error: false, data: responseJson.data }
}

export const editArchiveNote = async (id) => {
  const response = await fetchWithToken(`${BASE_URL}/notes/${id}/archive`, {
    method: 'POST'
  })

  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    return { error: true, data: responseJson }
  }

  return { error: false, data: responseJson }
}

export const editUnarchiveNote = async (id) => {
  const response = await fetchWithToken(`${BASE_URL}/notes/${id}/unarchive`, {
    method: 'POST'
  })

  const responseJson = await response.json()

  if (responseJson.status !== 'success') {
    return { error: true, data: responseJson }
  }

  return { error: false, data: responseJson }
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
