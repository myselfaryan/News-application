import React from 'react'
import { Button } from "@/components/ui/button"
import { BrowserRouter } from 'react-router-dom'
import NewsArticles from './pages/NewsArticles'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Home from './pages/Home'
import SignInForm from './auth/forms/SignInForm'
import SignUpForm from './auth/forms/SignUpForm'

function App() {
  return (
    <BrowserRoute>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/news" element={<NewsArticles  />} />
      </Route>
    </Routes>
    </BrowserRoute >
  )
}

export default App