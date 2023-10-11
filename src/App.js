import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

//stylesheet
import './styles/App.css'

import SocialLinks from './components/Social_Links/SocialLinks'

import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import OrderFormPage from './pages/OrderFormPage'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      errorElement: <ErrorPage/>
    },
    {
      path: '/order-form',
      element: <OrderFormPage/>
    }
  ])
  
  return (
    <ChakraProvider theme={extendTheme({
      styles: {
        global: {
          body: {
            bg: 'white',
          }
        }
      },
    })}>
      {/* <ChatHead/> */}
      <SocialLinks/> 
      <RouterProvider router={router}/> 
    </ChakraProvider>
  );
}

export default App;
