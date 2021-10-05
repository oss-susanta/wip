import React from 'react';
import { Menu } from 'antd';
import { BsFillBookmarksFill, BsBraces } from 'react-icons/bs';
import { FaFilter } from 'react-icons/fa';
import { MdWidgets } from 'react-icons/md';

const options = [
  {
    id: 'showBookmarksPanel',
    text: 'Bookmarks',
    Icon: BsFillBookmarksFill,
  },
  {
    id: 'showWidgets',
    text: 'Widgets',
    Icon: MdWidgets,
  },
  {
    id: 'showFilters',
    text: 'Filter',
    Icon: FaFilter,
  },
  {
    id: 'showState',
    text: 'State',
    Icon: BsBraces,
  },
];

const menuIconStyle = {
  fontSize: 16,
};

const menuItemStyle = {
  height: '32px',
  lineHeight: '32px',
};

export default function Sidebar({
  visible,
  selected,
  onSelect,
  onVisibilityChange,
}) {
  const handleMouseEnter = () => onVisibilityChange(true);
  const handleSelect = ({ key }) => {
    onSelect(key);
  };
  return (
    <>
      <span className="w-6" onMouseEnter={handleMouseEnter} />
      <aside
        hidden={!visible}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 -mt-12 shadow-md"
      >
        <Menu
          mode="inline"
          inlineCollapsed
          style={{ flex: 'none', width: '48px' }}
          selectedKeys={[selected]}
          onSelect={handleSelect}
        >
          {options.map((menu) => (
            <Menu.Item
              style={menuItemStyle}
              key={menu.id}
              icon={<menu.Icon style={menuIconStyle} />}
            >
              {menu.text}
            </Menu.Item>
          ))}
        </Menu>
      </aside>
    </>
  );
}
