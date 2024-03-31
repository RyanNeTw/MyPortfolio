import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages';
import AboutPage from './pages/about';
import ErrorPage from './pages/error';
import RepositoriesPage from './pages/repositories';
import { store } from './store';
import { StoreProvider } from './store/store';

function App() {

  return (
    <div className="flex flex-col items-center">
        <div className='w-full md:w-2/3 2xl:w-1/2 max-w-screen-xl max-h-screen overflow-y-scroll no-scrollbar px-12'>
        <Provider store={store}>
            <StoreProvider>
              <BrowserRouter>
                      <Routes>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/repositories" element={<RepositoriesPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="*" element={<ErrorPage />}/>
                      </Routes>
              </BrowserRouter>
            </StoreProvider>
          </Provider>
        </div>
    </div>
  );
}

export default App;
