import React from 'react';
import { VscDebugAlt } from 'react-icons/vsc';

const plugin = {
  id: 'debug',
  name: 'Debug',
  Icon() {
    return <VscDebugAlt />;
  },
  onApply() {
    console.log('debug');
  },
};

export default plugin;
