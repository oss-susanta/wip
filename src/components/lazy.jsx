import React, { lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { AiOutlineLoading } from 'react-icons/ai';

const iconStyle = {
  fontSize: 64,
};

function Loading() {
  return (
    <div className="fixed inset-0 grid place-items-center pointer-events-none">
      <Spin
        size="large"
        indicator={
          <AiOutlineLoading className="animate-spin" style={iconStyle} />
        }
      />
    </div>
  );
}

export default function createLazy(fn) {
  const Component = lazy(fn);
  function LazyComponent(props) {
    return (
      <Suspense fallback={<Loading />}>
        <Component {...props} />
      </Suspense>
    );
  }
  return LazyComponent;
}
