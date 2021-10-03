import React from 'react';
import 'antd/dist/antd.css';
import './styles/tailwind.css';
import './main.scss';
import Header from './components/Header';
import KeyBinder from './components/KeyBinder';
import { appKeyBindings } from './configs/keyBindings';
import createKeyBindings from './utils/keyBindings';

const keyBindings = createKeyBindings(appKeyBindings);

export default function App() {
  return (
    <>
      <Header userId="1587765" messageCount={10} keyBindings={keyBindings} />
      <KeyBinder
        keyBindings={keyBindings}
        onCommand={(commandId, event) => {
          event.preventDefault();
          console.log(commandId);
        }}
      />
    </>
  );
}
