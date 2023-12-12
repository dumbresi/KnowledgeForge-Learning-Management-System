import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import i18n from "./i18n";
import { I18nextProvider } from 'react-i18next';
import { startTransition , Suspense} from 'react';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(

  <Provider store={store}>
   
    <PersistGate persistor={persistor} loading={null}>
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<div>loading..</div>}>
      <App />
      </Suspense>
      
      </I18nextProvider>
    </PersistGate>
    
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
