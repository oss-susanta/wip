import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as config from './map';

export default function Layer({ id }) {
  const state = useSelector((state) => state.content.present[id]);
  const dispatch = useDispatch();
  const Component = config.get('container', state?.type)?.Component;
  if (state == null || Component == null) return null;
  return <Component state={state} dispatch={dispatch} />;
}
