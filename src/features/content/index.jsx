import React from 'react';
import { tw } from 'twind';
import Layer from './Layer';

export default function Content() {
  return (
    <main className={tw('w-full h-full')}>
      <Layer id={0} />
    </main>
  );
}
