import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

//stylesheet
import './styles/App.css'

import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import OrderFormPage from './pages/OrderFormPage'

import { useState } from 'react'

function App() {

  const [order,setOrder] = useState([])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage order={order} setOrder={setOrder} />,
      errorElement: <ErrorPage/>
    },
    {
      path: '/order-form',
      element: <OrderFormPage  order={order}/>
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
      <RouterProvider router={router}/> 
    </ChakraProvider>
  );
}

export default App;
