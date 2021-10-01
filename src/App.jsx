import React from 'react';
import 'antd/dist/antd.css';
import './styles/tailwind.css';
import './main.scss';
import Header from './components/Header';
import KeyBinder from './components/KeyBinder';
import * as keyBindings from './configs/keyBindings';

keyBindings.registerAll([
  ['createNewDashboard', 'Ctrl+N'],
  ['openDashboard', 'Ctrl+O'],
  ['saveDashboard', 'Ctrl+S'],
  ['saveAsDashboard', 'Ctrl+Shift+S'],
  ['undo', 'Ctrl+Z'],
  ['redo', 'Ctrl+Y'],
  ['showSettings', 'Ctrl+,'],
]);

export default function App() {
  return (
    <>
      <Header userId="1587765" messageCount={10} />
      <KeyBinder
        onCommand={(commandId, event) => {
          event.preventDefault();
          console.log(commandId);
        }}
      />
    </>
  );
}
