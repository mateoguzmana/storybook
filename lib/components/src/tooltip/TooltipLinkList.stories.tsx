/* eslint-disable storybook/default-exports */
import React, { Children, cloneElement, FunctionComponent, MouseEvent, ReactElement } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WithTooltip } from './WithTooltip';

import { TooltipLinkList } from './TooltipLinkList';

const onLinkClick = action('onLinkClick');

interface StoryLinkWrapperProps {
  href: string;
  passHref?: boolean;
}

const StoryLinkWrapper: FunctionComponent<StoryLinkWrapperProps> = ({
  href,
  passHref,
  children,
}) => {
  const child = Children.only(children) as ReactElement;

  return cloneElement(child, {
    href: passHref && href,
    onClick: (e: MouseEvent) => {
      e.preventDefault();
      onLinkClick(href);
    },
  });
};

StoryLinkWrapper.defaultProps = {
  passHref: false,
};

// @TODO: not a story, but not in excludeStories because this is storiesOf format [?]
// eslint-disable-next-line storybook/prefer-pascal-case
export const links = [
  { id: '1', title: 'Link', href: 'http://google.com' },
  { id: '2', title: 'Link', href: 'http://google.com' },
  { id: '3', title: 'callback', onClick: action('onClick') },
];

storiesOf('basics/Tooltip/TooltipLinkList', module)
  .addDecorator((storyFn) => (
    <div style={{ height: '300px' }}>
      <WithTooltip placement="top" trigger="click" startOpen tooltip={storyFn()}>
        <div>Tooltip</div>
      </WithTooltip>
    </div>
  ))
  .add('links', () => <TooltipLinkList links={links.slice(0, 2)} LinkWrapper={StoryLinkWrapper} />)
  .add('links and callback', () => (
    <TooltipLinkList links={links} LinkWrapper={StoryLinkWrapper} />
  ));
