import React from 'react';
import {
  ThemeProvider,
} from "@material-ui/core/styles";
import TaskBoar from './TaskBoar';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import theme from './commons/Theme';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalLoading from './components/GlobalLoading';
import MaxModal from './components/MaxModal';
/**
 *
 */

// sum two numbers

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <GlobalLoading />
        <MaxModal />
        <TaskBoar />
      </ThemeProvider>
    </Provider >
  );
}

export default App;
