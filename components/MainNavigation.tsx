import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { ExternalLinkFragment, InternalLinkFragment } from '../types/dato.types';
import NavigationItem from './NavigationItem';

interface Props {
  navigationItems: Array<InternalLinkFragment | ExternalLinkFragment>;
}

const MainNavigation: FC<Props> = ({ navigationItems }) => {
  const { locales, pathname } = useRouter();
  return (
    <nav>
      <ul>
        {navigationItems.map((navigationItem) => (
          <li>
            <NavigationItem item={navigationItem} />
          </li>
        ))}
        {locales.map((availableLocale) => (
          <li>
            <Link href={pathname} locale={availableLocale}>
              {availableLocale.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNavigation;
