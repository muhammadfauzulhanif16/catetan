import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'
import React from 'react'
import { Register } from './pages/auth/Register'

export const router = createBrowserRouter(
  createRoutesFromElements(<Route path='/' element={<Register />} />)
)
