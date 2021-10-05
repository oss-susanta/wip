import React from 'react';
import 'antd/dist/antd.css';
import { useSnapshot } from 'valtio';
import './styles/tailwind.css';
import './main.scss';
import Header from './components/Header';
import KeyBinder from './components/KeyBinder';
import Sidebar from './components/Sidebar';
import Split from './components/Split';
import createLazy from './components/lazy';
import * as overlay from './store/overlay';
import * as settings from './store/settings';
import { appKeyBindings } from './configs/keyBindings';
import createKeyBindings from './utils/keyBindings';

const About = createLazy(() => import('./components/About'));
const Settings = createLazy(() => import('./components/Settings'));
const UserProfile = createLazy(() => import('./components/UserProfile'));

const keyBindings = createKeyBindings(appKeyBindings);

const user = {
  userId: '1587765',
  roles: ['ADMIN', 'DEV', 'PSS', 'USER'],
};

export default function App() {
  const overlaySnap = useSnapshot(overlay.state);
  const settingsSnap = useSnapshot(settings.state);
  const hideSidebar = () => {
    if (overlaySnap.sidebar) {
      overlay.actions.toggle('sidebar', false);
    }
  };
  const handleCommand = (commandId) => {
    if (commandId === 'showAbout') {
      overlay.actions.toggle('about', true);
    }
    if (commandId === 'showSettings') {
      overlay.actions.toggle('settings', true);
    }
    if (commandId === 'showUserProfile') {
      overlay.actions.toggle('userProfile', true);
    }
  };
  return (
    <>
      <div className="w-full h-full flex flex-col">
        <Header
          userId={user.userId}
          messageCount={10}
          keyBindings={keyBindings}
          onCommand={handleCommand}
        />
        <section className="flex-1 flex relative">
          <Sidebar
            visible={overlaySnap.sidebar}
            onVisibilityChange={(visible) =>
              overlay.actions.toggle('sidebar', visible)
            }
          />
          <aside
            className="flex-none"
            style={{ width: settingsSnap.asideSize }}
            onMouseEnter={hideSidebar}
          />
          <Split
            minSize={360}
            size={settingsSnap.asideSize}
            className="flex-none h-full w-1 bg-paper2"
            style={{ cursor: 'col-resize' }}
            onSizeChange={(asideSize) => settings.actions.update({ asideSize })}
          />
          <main className="flex-1" onMouseEnter={hideSidebar} />
        </section>
      </div>
      <KeyBinder
        keyBindings={keyBindings}
        onCommand={(commandId, event) => {
          event.preventDefault();
          console.log(commandId);
          handleCommand(commandId);
        }}
      />
      {overlaySnap.settings && (
        <Settings
          defaultValue={settingsSnap}
          onOk={(values) => {
            overlay.actions.toggle('settings', false);
            settings.actions.update(values);
          }}
          onCancel={() => overlay.actions.toggle('settings', false)}
        />
      )}
      {overlaySnap.about && (
        <About onCancel={() => overlay.actions.toggle('about', false)} />
      )}
      {overlaySnap.userProfile && (
        <UserProfile
          userId={user.userId}
          roles={user.roles}
          onCancel={() => overlay.actions.toggle('userProfile', false)}
        />
      )}
    </>
  );
}
