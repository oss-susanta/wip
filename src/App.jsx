import React from 'react';
import 'antd/dist/antd.css';
import { useSnapshot } from 'valtio';
import './styles/tailwind.css';
import './main.scss';
import Header from './components/Header';
import KeyBinder from './components/KeyBinder';
import createLazy from './components/lazy';
import * as overlay from './store/overlay';
import * as settings from './store/settings';
import { appKeyBindings } from './configs/keyBindings';
import createKeyBindings from './utils/keyBindings';

const Settings = createLazy(() => import('./components/Settings'));

const keyBindings = createKeyBindings(appKeyBindings);

export default function App() {
  const overlaySnap = useSnapshot(overlay.state);
  const settingsSnap = useSnapshot(settings.state);
  const handleCommand = (commandId) => {
    if (commandId === 'showSettings') {
      overlay.actions.toggleSettings(true);
    }
  };
  return (
    <>
      <Header
        userId="1587765"
        messageCount={10}
        keyBindings={keyBindings}
        onCommand={handleCommand}
      />
      <KeyBinder
        keyBindings={keyBindings}
        onCommand={(commandId, event) => {
          event.preventDefault();
          console.log(commandId);
          handleCommand(commandId);
        }}
      />
      {overlaySnap.showSettings && (
        <Settings
          defaultValue={settingsSnap}
          onOk={(values) => {
            overlay.actions.toggleSettings(false);
            settings.actions.update(values);
          }}
          onCancel={() => overlay.actions.toggleSettings(false)}
        />
      )}
    </>
  );
}
