import React, { useMemo, useRef } from 'react';
import { Empty } from 'antd';
import { tw } from 'twind';
import useSize from '@react-hook/size';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import ReactGridLayout from 'react-grid-layout';
import Layer from './Layer';
import content from './slice';

function EmptyGrid({ id }) {
  return (
    <div id={id} className={tw('w-full h-full grid place-items-center')}>
      <Empty description="No items" />
    </div>
  );
}

const COLUMNS = 24;
const ROWS = 12;
const MARGIN = [8, 8];
const MIN_HEIGHT = 540;

const gridStyle = {
  background: 'inherit',
};

function Grid(props) {
  const {
    state: { id, offspring },
    dispatch,
  } = props;
  const divRef = useRef();
  const [width, height] = useSize(divRef);

  const [gridLayout, rowHeight] = useMemo(() => {
    const h = Math.max(height, MIN_HEIGHT);
    const m = (ROWS + 1) * MARGIN[0];
    const r = Math.floor((h - m) / ROWS);
    const value = offspring.map((item) => ({
      i: item.id,
      x: item.x,
      y: item.y,
      w: item.w,
      h: item.h,
    }));
    return [value, r];
  }, [offspring, height]);

  const handleChange = (layout) => {
    const value = layout.map((item) => ({
      id: item.i,
      x: item.x,
      y: item.y,
      w: item.w,
      h: item.h,
    }));
    dispatch(content.actions.update({ name: 'offspring', value }));
  };

  return (
    <div id={id} className={tw('w-full h-full bg-gray-200')} ref={divRef}>
      <ReactGridLayout
        style={gridStyle}
        draggableHandle="[data-drag]"
        layout={gridLayout}
        rowHeight={rowHeight}
        cols={COLUMNS}
        margin={MARGIN}
        width={width}
        onLayoutChange={handleChange}
      >
        {offspring.map((item) => (
          <div key={item.id}>
            <Layer id={item.id} />
          </div>
        ))}
      </ReactGridLayout>
    </div>
  );
}

export default function GridLayout(props) {
  const { state } = props;
  const Component = state.offspring?.length ? Grid : EmptyGrid;
  return <Component {...props} />;
}
