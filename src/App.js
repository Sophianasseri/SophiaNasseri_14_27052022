import { Provider } from 'react-redux';
import { store } from './Redux/store';
import './App.css';
import Router from './router/Router';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
