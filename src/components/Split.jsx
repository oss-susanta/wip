import React, { useRef } from 'react';

export default function Split({ minSize, size, onSizeChange, ...rest }) {
  const ref = useRef();

  const handleMouseMove = (event) => {
    const { node } = ref.current;
    const box = node.parentNode.getBoundingClientRect();
    const minX = Math.max(0, minSize);
    const maxX = box.right - node.offsetWidth;
    const x = Math.max(minX, Math.min(event.pageX - box.left, maxX));
    node.style.left = `${x}px`;
  };

  const handleMouseUp = () => {
    const { node, startX } = ref.current;
    const x = node.offsetLeft;
    const w = node.parentNode.offsetWidth;
    const dx = Math.round(((x - startX) * 100) / w);
    const newSize = `${parseFloat(size) + dx}%`;
    node.parentNode.style.cursor = '';
    document.removeEventListener('mousemove', handleMouseMove, false);
    document.removeEventListener('mouseup', handleMouseUp, false);
    ref.current = null;
    node.remove();
    onSizeChange(newSize);
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
    const dragHandle = event.currentTarget;
    const startX = dragHandle.getBoundingClientRect().left;
    const parentNode = dragHandle.parentNode;
    const box = parentNode.getBoundingClientRect();
    const node = document.createElement('i');
    node.style.position = 'absolute';
    node.style.height = '100%';
    node.style.width = '2px';
    node.style.left = `${event.pageX - box.left}px`;
    node.style.top = 0;
    node.style.background = 'currentColor';
    parentNode.style.cursor = 'col-resize';
    parentNode.append(node);
    ref.current = { node, startX };
    document.addEventListener('mousemove', handleMouseMove, false);
    document.addEventListener('mouseup', handleMouseUp, false);
  };

  return <div {...rest} onMouseDown={handleMouseDown} />;
}
