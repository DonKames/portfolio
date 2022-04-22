import { Provider } from 'react-redux';
import { AppRouter } from './components/routers/AppRouter';

import {store} from './store/store';

const PortfolioApp = () => {

  return (
    <Provider store={store}>
        <AppRouter />
    </Provider>
  )
}

export default PortfolioApp;