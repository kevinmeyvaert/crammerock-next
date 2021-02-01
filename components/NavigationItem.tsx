import Link from 'next/link';
import { FC } from 'react';

import { ExternalLinkFragment, InternalLinkFragment } from '../types/dato.types';

interface Props {
  item: InternalLinkFragment | ExternalLinkFragment;
}

const NavigationItem: FC<Props> = ({ item }) => {
  if (item.__typename === 'InternalLinkRecord') {
    return <Link href={`/${item.page}`}>{item.label}</Link>;
  }
  return <a href={item.link}>{item.label}</a>;
};

export default NavigationItem;
