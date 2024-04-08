import React from 'react';
import ReactDOM from "react-dom/client";
import { ReactFlowProvider } from "reactflow";
import './main.css';
import App from "./App";
// import App from "./DataApp";
import './main_add.css';


import 'primeicons/primeicons.css';
import { PrimeReactProvider } from 'primereact/api';
// import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import { twMerge } from 'tailwind-merge';
import BunchComponents from './BunchComponents';


import Tailwind from 'primereact/passthrough/tailwind';
import "reactflow/dist/style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind, ptOptions: { mergeSections: true, mergeProps: true, classNameMergeFunction: twMerge } }}>

      <ReactFlowProvider>
        <>
          <BunchComponents />
          <hr />
          <div style={{ width: "100vw", height: "100vh" }}>
            <App />
          </div>
        </>
      </ReactFlowProvider>
    </PrimeReactProvider>
  </React.StrictMode>
);
