import React from 'react';
import { Avatar, Badge, Dropdown, Menu } from 'antd';
import { AiFillAppstore, AiFillFileAdd, AiFillFile } from 'react-icons/ai';
import { BsQuestionOctagonFill } from 'react-icons/bs';
import {
  FaBell,
  FaBookOpen,
  FaCog,
  FaSave,
  FaSignOutAlt,
  FaTools,
  FaUser,
} from 'react-icons/fa';
import { ImBin2, ImRedo2, ImUndo2 } from 'react-icons/im';
import { MdHeadsetMic, MdNewReleases } from 'react-icons/md';

const menuIconStyle = {
  fontSize: '16px',
};

function createMenu(options) {
  return (
    <Menu>
      {options.map((menu) => {
        if (menu.type === 'divider') {
          return <Menu.Divider key={menu.id} />;
        }
        const icon = menu.Icon ? <menu.Icon style={menuIconStyle} /> : null;
        return (
          <Menu.Item key={menu.id} icon={icon}>
            <div className="flex items-center justify-between">
              <span>{menu.text}</span>
              {menu.shortcut && (
                <kbd className="ml-4 text-xs">{menu.shortcut}</kbd>
              )}
            </div>
          </Menu.Item>
        );
      })}
    </Menu>
  );
}

const avatarOptions = [
  { id: 'profile', text: 'User Profile', Icon: FaUser },
  { id: 'settings', text: 'Settings', Icon: FaCog },
  { id: 'divider', type: 'divider' },
  { id: 'log_out', text: 'Log Out', Icon: FaSignOutAlt },
];

const helpOptions = [
  { id: 'changelog', text: 'Release Notes', Icon: MdNewReleases },
  { id: 'faq', text: 'Troubleshoot', Icon: FaTools },
  { id: 'docs', text: 'Documentation', Icon: FaBookOpen },
  { id: 'divider', type: 'divider' },
  { id: 'support', text: 'Contact Support', Icon: MdHeadsetMic },
];

const startOptions = [
  {
    id: 'new_dashboard',
    text: 'New Dashboard',
    shortcut: 'Alt+N',
    Icon: AiFillFileAdd,
  },
  {
    id: 'open_dashboard',
    text: 'Open Dashboard',
    shortcut: 'Alt+O',
    Icon: AiFillFile,
  },
  { id: 'save', text: 'Save', shortcut: 'Alt+S', Icon: FaSave },
  { id: 'save_as', text: 'Save As...', shortcut: 'Alt+Shift+S', Icon: FaSave },
  { id: 'undo', text: 'Undo', shortcut: 'Ctrl+Z', Icon: ImUndo2 },
  { id: 'redo', text: 'Redo', shortcut: 'Ctrl+Y', Icon: ImRedo2 },
  { id: 'divider', type: 'divider' },
  { id: 'clear', text: 'Clear Dashboard', Icon: ImBin2 },
];

const headerIconStyle = {
  fontSize: 20,
};

export default function Header({ userId, messageCount }) {
  return (
    <header className="h-12 px-6 flex items-center gap-2 bg-paper shadow-md">
      <Dropdown overlay={createMenu(startOptions)} placement="bottomLeft">
        <AiFillAppstore style={headerIconStyle} />
      </Dropdown>
      <div className="flex-1">Header</div>
      <nav className="flex-none flex items-center gap-4">
        <Badge dot count={messageCount} size="small">
          <FaBell style={headerIconStyle} />
        </Badge>
        <Dropdown overlay={createMenu(helpOptions)} placement="bottomCenter">
          <BsQuestionOctagonFill style={headerIconStyle} />
        </Dropdown>
        <Dropdown overlay={createMenu(avatarOptions)} placement="bottomCenter">
          <figure className="flex items-center gap-1 m-0">
            <Avatar size="small" icon={<FaUser />} />
            <figcaption className="text-xs">{userId}</figcaption>
          </figure>
        </Dropdown>
      </nav>
    </header>
  );
}
