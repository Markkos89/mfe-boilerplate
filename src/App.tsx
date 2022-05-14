import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Users } from './pages/Users'

import { ChakraProvider } from '@chakra-ui/react'
import { hot } from 'react-hot-loader/root'

const App = () => {
  if (window.location.pathname === '/') {
    return (
      <>
        <ChakraProvider resetCSS>
          <BrowserRouter>
            <Routes>
              <Route path="*">
                <Route path="home2" element={<Home />} />
                <Route index element={<Users />} />
                <Route path="*" element={<div>Not found</div>} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
      </>
    )
  }
  return (
    <>
      <ChakraProvider resetCSS>
        <Routes>
          <Route path="*">
            <Route path="home2" element={<Home />} />
            <Route index element={<Users />} />
            <Route path="*" element={<div>Not found</div>} />
          </Route>
        </Routes>
      </ChakraProvider>
    </>
  )
}

export default hot(App)
