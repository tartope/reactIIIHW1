import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from 'react-query-devtools';
import Repositories from './components/Repositories';


const queryClient = new QueryClient({});

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>

        <Repositories />
        {/* <ReactQueryDevtools initialIsOpen={true} /> */}

      </QueryClientProvider>
    </div>
  );
}

export default App;
