import React from 'react';
import { tw } from 'twind';
import { FiMoreVertical } from 'react-icons/fi';
import { Dropdown, Menu, Tooltip } from 'antd';
import * as config from './map';

function createMenu(props, actions) {
  const handleClick = ({ key }) => {
    const { onApply } = config.get('action', key);
    onApply(props);
  };
  return (
    <Menu onClick={handleClick}>
      {actions.map((id) => {
        const action = config.get('action', id);
        if (action == null) return null;
        const { Icon, name } = action;
        const text = typeof name === 'function' ? name(props) : name;
        return (
          <Menu.Item key={id} icon={<Icon {...props} />}>
            {text}
          </Menu.Item>
        );
      })}
    </Menu>
  );
}

export default function Dashlet(props) {
  const { type, children } = props;
  const container = config.get('container', type);
  const quickActions = container?.quickActions || [];
  const actions = container?.actions || [];
  return (
    <article className={tw('h-full bg-white px-4 pb-4 flex flex-col')}>
      <div data-drag className={tw('h-4 cursor-move')} />
      <header data-drag className={tw('mb-2 cursor-move flex gap-4 group')}>
        <h3
          className={tw(
            'flex-1 m-0 whitespace-nowrap overflow-hidden overflow-ellipsis'
          )}
        >
          Card
        </h3>
        <nav className={tw('hidden gap-2 items-center group-hover:flex')}>
          {quickActions.map((id) => {
            const action = config.get('action', id);
            if (action == null) return null;
            const { Icon, name } = action;
            const tooltip = typeof name === 'function' ? name(props) : name;
            return (
              <Tooltip key={name} title={tooltip}>
                <Icon {...props} />
              </Tooltip>
            );
          })}
          <Tooltip title="More Options">
            <Dropdown
              placement="bottomCenter"
              overlay={createMenu(props, actions)}
            >
              <FiMoreVertical />
            </Dropdown>
          </Tooltip>
        </nav>
      </header>
      <section className={tw('flex-1')}>{children}</section>
    </article>
  );
}
