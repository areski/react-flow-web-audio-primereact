import React, { useState, useEffect } from 'react';
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

import { Button } from 'primereact/button';
import { RadioButton } from 'primereact/radiobutton';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Badge } from 'primereact/badge';

import Tailwind from 'primereact/passthrough/tailwind';
import "reactflow/dist/style.css";
import { twMerge } from 'tailwind-merge';
import { TabMenu } from 'primereact/tabmenu';
import { InputNumber } from 'primereact/inputnumber';

function BasicDemo() {
  const items = [
      { label: 'Dashboard', icon: 'pi pi-home' },
      { label: 'Transactions', icon: 'pi pi-chart-line' },
      { label: 'Products', icon: 'pi pi-list' },
      { label: 'Messages', icon: 'pi pi-inbox' }
  ];

  return (
      <div className="card">
          <TabMenu model={items} />
      </div>
  )
}


function ButtonsDemo() {
  const [value1, setValue1] = useState(20);
  const [value2, setValue2] = useState(10.50);
  const [value3, setValue3] = useState(25);

  return (
      <div className="card flex flex-wrap gap-3 p-fluid">
          <div className="flex-auto">
              <label htmlFor="stacked-buttons" className="font-bold block mb-2">Stacked</label>
              <InputNumber inputId="stacked-buttons" value={value1} onValueChange={(e) => setValue1(e.value)} showButtons mode="currency" currency="USD" />
          </div>

          <div className="flex-auto">
              <label htmlFor="minmax-buttons" className="font-bold block mb-2">Min-Max Boundaries</label>
              <InputNumber inputId="minmax-buttons" value={value3} onValueChange={(e) => setValue3(e.value)} mode="decimal" showButtons min={0} max={100} />
          </div>
          <div className="flex-auto">
              <label htmlFor="horizontal-buttons" className="font-bold block mb-2">Horizontal with Step</label>
              <InputNumber inputId="horizontal-buttons" value={value2} onValueChange={(e) => setValue2(e.value)} showButtons buttonLayout="horizontal" step={0.25}
                  decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"
                  mode="currency" currency="EUR" />
          </div>
      </div>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <PrimeReactProvider value={{ unstyled: false, pt: Tailwind, ptOptions: { mergeSections: true, mergeProps: true, classNameMergeFunction: twMerge } }}>

      <ReactFlowProvider>
        <>
          <h1>ReactFlow with PrimeReact</h1>
          <Button label="Click" />
          <BasicDemo />
          <ButtonsDemo />
          <br />

          <div className="card flex flex-wrap justify-content-center gap-3 my-3">

            <Button icon="pi pi-check" size="small" />
            <Button label="Submit" icon="pi pi-check" size="small" />
            <Button label="Submit" icon="pi pi-check" iconPos="right" size="small" />

            <Button label="Secondary" severity="secondary" size="small" />
            <Button label="Success" severity="success" size="small" />
            <Button label="Info" severity="info" size="small" />
            <Button label="Warning" severity="warning" size="small" />
            <Button label="Help" severity="help" size="small" />
            <Button label="Danger" severity="danger"  />
          </div>

          <div className="card flex flex-wrap justify-content-center gap-3 my-3">
            <Badge value="2"></Badge>
            <Badge value="8" severity="success"></Badge>
            <Badge value="4" severity="info"></Badge>
            <Badge value="12" severity="warning"></Badge>
            <Badge value="3" severity="danger"></Badge>
            <Badge value="7" severity="secondary"></Badge>
            <Badge value="5" severity="contrast"></Badge>
          </div>

          <br />
          <div className="flex flex-row justify-content-between my-5 w-full">
              <Button type="button" label="Button 1" className="mb-3"></Button>
              <Button type="button" label="Button 2" className="p-button-secondary mb-3"></Button>
              <Button type="button" label="Button 3" className="p-button-help"></Button>
          </div>
          <br />
          <div className="flex flex-wrap gap-3">
              <div className="flex align-items-center">
                  <RadioButton inputId="ingredient1" name="pizza" value="Cheese"/>
                  <label htmlFor="ingredient1" className="ml-2">Cheese</label>
              </div>
              <div className="flex align-items-center">
                  <RadioButton inputId="ingredient2" name="pizza" value="Mushroom"/>
                  <label htmlFor="ingredient2" className="ml-2">Mushroom</label>
              </div>
              <div className="flex align-items-center">
                  <RadioButton inputId="ingredient3" name="pizza" value="Pepper"/>
                  <label htmlFor="ingredient3" className="ml-2">Pepper</label>
              </div>
              <div className="flex align-items-center">
                  <RadioButton inputId="ingredient4" name="pizza" value="Onion"/>
                  <label htmlFor="ingredient4" className="ml-2">Onion</label>
              </div>
          </div>

          <br />
          <Accordion activeIndex={0}>
            <AccordionTab header="Header I">
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </AccordionTab>
            <AccordionTab header="Header II">
                <p className="m-0">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                    quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                    sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </AccordionTab>
            <AccordionTab header="Header III">
                <p className="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                    quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                    mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </AccordionTab>
        </Accordion>
          <hr />
          <div style={{ width: "100vw", height: "100vh" }}>
            <App />
          </div>
        </>
      </ReactFlowProvider>
    </PrimeReactProvider>
  </React.StrictMode>
);
