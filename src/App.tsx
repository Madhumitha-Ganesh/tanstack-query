import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import './App.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient()

const App = () => {
return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AppRoutes />
      </Router>
    </QueryClientProvider>
  )
}

export default App
