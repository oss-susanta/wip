import React from 'react';
import { FiX } from 'react-icons/fi';

const plugin = {
  id: 'remove',
  name: 'Remove',
  Icon() {
    return <FiX />;
  },
  onApply() {
    console.log('remove');
  },
};

export default plugin;
