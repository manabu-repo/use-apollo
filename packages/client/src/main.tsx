import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import './index.css'

import { ApolloProvider } from '@apollo/client'
import { useApolloClient } from './hooks/useApolloClient'

const client = useApolloClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)
