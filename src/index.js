import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import './index.scss'
import App from './App'

const queryClient = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>,
  document.getElementById('root')
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <QueryClientProvider client={queryClient}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </QueryClientProvider>
// )
