import React, { Suspense } from 'react';
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from 'react-redux'
import store  from '@/store'
import routes from "@/router"

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Suspense fallback={<div>loading</div>}>
          {renderRoutes(routes)}
        </Suspense>
      </HashRouter>
    </Provider>
    
  );
}

export default App;
