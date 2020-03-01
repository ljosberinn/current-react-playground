import classnames from 'classnames';
import { Tag, Box, Modal } from 'rbx';
import React, { lazy } from 'react';
import { useTranslation } from 'react-i18next';

import withSuspense from '../../hocs/withSuspense';
import styles from './Mobile.module.scss';

const RouteList = withSuspense(
  lazy(() =>
    import(/* webpackChunkName: "drawer_nav.route_list" */ './RouteList'),
  ),
);

export default function Mobile({ isExpanded, toggleMenu, ...routeListProps }) {
  const { t } = useTranslation('navigation');

  return (
    <>
      <Tag
        color="info"
        rounded
        onClick={toggleMenu}
        className={styles.absoluteButton}
        role="button"
        aria-label={t('toggleMenu')}
      >
        <div className={classnames('navbar-burger', isExpanded && 'is-active')}>
          <span />
          <span />
          <span />
        </div>
      </Tag>

      {isExpanded && (
        <Modal active closeOnBlur closeOnEsc>
          <Modal.Background onClick={toggleMenu} />
          <Modal.Content>
            <Box className={styles.mobileBox}>
              <nav aria-label="primary navigation">
                <RouteList {...routeListProps} />
              </nav>
            </Box>
          </Modal.Content>
        </Modal>
      )}
    </>
  );
}
