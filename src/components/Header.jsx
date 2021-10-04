import React from 'react';
import { Avatar, Badge, Dropdown, Menu } from 'antd';
import { AiFillAppstore, AiFillFileAdd, AiFillFile } from 'react-icons/ai';
import {
  BsFillBookmarksFill,
  BsInfoCircleFill,
  BsQuestionOctagonFill,
} from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
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

function MenuContent({ href, children }) {
  const className = 'flex items-center gap-4';
  return href ? (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ) : (
    <div className={className}>{children}</div>
  );
}
function createMenu(options, keyBindings, onCommand) {
  return (
    <Menu onClick={onCommand}>
      {options.map((menu) => {
        if (menu.type === 'divider') {
          return <Menu.Divider key={menu.id} />;
        }
        const shortcut = keyBindings.getBinding(menu.id);
        const icon = menu.Icon ? <menu.Icon style={menuIconStyle} /> : null;
        return (
          <Menu.Item key={menu.id} icon={icon}>
            <MenuContent href={menu.href}>
              <span>{menu.text}</span>
              {menu.href && (
                <FiExternalLink className="ml-auto" style={menuIconStyle} />
              )}
              {shortcut && <span className="ml-auto text-xs">{shortcut}</span>}
            </MenuContent>
          </Menu.Item>
        );
      })}
    </Menu>
  );
}

const avatarOptions = [
  {
    id: 'showUserProfile',
    text: 'User Profile',
    Icon: FaUser,
  },
  {
    id: 'showSettings',
    text: 'Settings',
    Icon: FaCog,
  },
  {
    id: 'divider',
    type: 'divider',
  },
  {
    id: 'logOut',
    text: 'Log Out',
    Icon: FaSignOutAlt,
  },
];

const helpOptions = [
  {
    id: 'showReleaseNotes',
    text: 'Release Notes',
    Icon: MdNewReleases,
    href: 'https://google.com',
  },
  {
    id: 'showTroubleshoot',
    text: 'Troubleshoot',
    Icon: FaTools,
    href: 'https://google.com',
  },
  {
    id: 'showDocumentation',
    text: 'Documentation',
    Icon: FaBookOpen,
    href: 'https://google.com',
  },
  {
    id: 'divider',
    type: 'divider',
  },
  {
    id: 'showContactSupport',
    text: 'Contact Support',
    Icon: MdHeadsetMic,
    href: 'https://google.com',
  },
  {
    id: 'showAbout',
    text: 'About',
    Icon: BsInfoCircleFill,
  },
];

const startOptions = [
  {
    id: 'createNewDashboard',
    text: 'New Dashboard',
    Icon: AiFillFileAdd,
  },
  {
    id: 'openDashboard',
    text: 'Open Dashboard',
    Icon: AiFillFile,
  },
  {
    id: 'saveDashboard',
    text: 'Save',
    Icon: FaSave,
  },
  {
    id: 'saveAsDashboard',
    text: 'Save As...',
    Icon: FaSave,
  },
  {
    id: 'undo',
    text: 'Undo',
    Icon: ImUndo2,
  },
  {
    id: 'redo',
    text: 'Redo',
    Icon: ImRedo2,
  },
  {
    id: 'divider',
    type: 'divider',
  },
  {
    id: 'clearDashboard',
    text: 'Clear Dashboard',
    Icon: ImBin2,
  },
];

const headerIconStyle = {
  fontSize: 20,
};

export default function Header({
  userId,
  messageCount,
  keyBindings,
  onCommand,
}) {
  const handleCommand = ({ key }) => {
    onCommand(key);
  };
  return (
    <header className="h-12 px-6 flex items-center gap-2 bg-paper shadow-md">
      <AiFillAppstore style={headerIconStyle} />
      <h1 className="flex-1 m-0 text-lg">Untitled Dashboard</h1>
      <nav className="flex-none flex items-center gap-4">
        <Dropdown
          overlay={createMenu(startOptions, keyBindings, handleCommand)}
          placement="bottomCenter"
        >
          <BsFillBookmarksFill style={headerIconStyle} />
        </Dropdown>
        <Badge dot count={messageCount} size="small">
          <FaBell style={headerIconStyle} />
        </Badge>
        <Dropdown
          overlay={createMenu(helpOptions, keyBindings, handleCommand)}
          placement="bottomCenter"
        >
          <BsQuestionOctagonFill style={headerIconStyle} />
        </Dropdown>
        <Dropdown
          overlay={createMenu(avatarOptions, keyBindings, handleCommand)}
          placement="bottomCenter"
        >
          <figure className="flex items-center gap-1 m-0">
            <Avatar size="small" icon={<FaUser />} />
            <figcaption className="text-xs">{userId}</figcaption>
          </figure>
        </Dropdown>
      </nav>
    </header>
  );
}
