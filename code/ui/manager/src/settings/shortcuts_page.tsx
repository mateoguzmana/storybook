import type { FC } from 'react';
import React from 'react';

import { Consumer } from '@storybook/manager-api';

import { ShortcutsScreen } from './shortcuts';

const ShortcutsPage: FC = () => (
  <Consumer>
    {({ api }) => (
      <ShortcutsScreen
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore TODO: handle case where the getShortcutKeys is undefined
        shortcutKeys={api?.getShortcutKeys()}
        addonsShortcutLabels={api?.getAddonsShortcutLabels()}
        {...{
          setShortcut: api?.setShortcut,
          restoreDefaultShortcut: api?.restoreDefaultShortcut,
          restoreAllDefaultShortcuts: api?.restoreAllDefaultShortcuts,
        }}
      />
    )}
  </Consumer>
);

export { ShortcutsPage };
