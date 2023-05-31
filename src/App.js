import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';

const queryClient = new QueryClient({});

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <ReactQueryDevtools initialIsOpen={true} />

      </QueryClientProvider>
    </div>
  );
}

export default App;
