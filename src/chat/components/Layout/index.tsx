import { MenuDataItem, ProLayout } from '@ant-design/pro-components';
import React from 'react';
import { MenuProps } from 'antd';
import { ChatsInfo } from '../../types';
import { IChatComponentProps } from '../../page/chat';

interface Props extends IChatComponentProps {
  menuExtraRender?: () => React.ReactNode;
  route?: {
    path: string;
    routes: Array<ChatsInfo>;
  };
  menuItemRender?: (
    item: MenuDataItem & {
      isUrl: boolean;
      onClick: () => void;
    },
    defaultDom: React.ReactNode,
    menuProps: MenuProps | any
  ) => React.ReactNode | undefined;
  menuDataRender?: (menuData: MenuDataItem[]) => MenuDataItem[];
  menuFooterRender?: (props?: any) => React.ReactNode;
  menuProps?: MenuProps;
  children?: React.ReactNode;
}

function Layout(props: Props) {
  const { menuExtraRender = () => <></>, menuItemRender = () => undefined } = props;
  const commonProps = {
    title: 'BIXI Chat',
    logo: 'https://u1.dl0.cn/icon/openailogo.svg',
    contentWidth: 'Fluid',
    fixedHeader: true,
    fixSiderbar: true,
    contentStyle: {
      height: 'calc(100vh - 56px)',
      background: '#fff'
    },
    siderMenuType: 'group',
    style: {
      background: '#fff'
    },
    menu: {
      hideMenuWhenCollapsed: true,
      locale: false,
      collapsedShowGroupTitle: false
    },
    suppressSiderWhenMenuEmpty: true,
    siderWidth: 300,
    menuExtraRender: menuExtraRender,
    menuItemRender: menuItemRender,
    route: props.mutil ? props.route : undefined,
    menuDataRender: props.menuDataRender,
    avatarProps: props.header
      ? {
          src: 'http://rpa-docs.datagrand.com/v13_6/images/logo.png',
          size: 'small',
          render: (props, dom) => <>{dom}</>
        }
      : undefined,
    menuFooterRender: props.menuFooterRender,
    menuProps: props.menuProps
  };

  if (props.header) {
    return (
      // @ts-ignore
      <ProLayout {...commonProps} layout='mix'>
        {props.children}
      </ProLayout>
    );
  }
  // @ts-ignore
  return <ProLayout {...commonProps}>{props.children}</ProLayout>;
}

export default Layout;
