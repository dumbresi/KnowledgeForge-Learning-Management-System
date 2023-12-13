import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import i18n from "./i18n";
import { I18nextProvider } from 'react-i18next';
import * as serviceWorkerRegistration from "./ServiceWorkerRegistration"
// import LocaleContext from './LocaleContext';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.ts')
    .then((registration) => {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch((error) => {
      console.error('Service Worker registration failed:', error);
    });
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(

  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
    <I18nextProvider i18n={i18n}>
      {/* <localeContext.Provider value={{locale, setLocale}}> */}
      <Suspense fallback={<div>loading..</div>}>
      <App />
      </Suspense>
      {/* </localeContext.Provider> */}
      </I18nextProvider>
    </PersistGate>
    
  </Provider>
);
serviceWorkerRegistration.register();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
