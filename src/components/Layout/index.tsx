import { MenuDataItem, ProLayout } from '@ant-design/pro-components'
import React from 'react'
import { MenuProps } from 'antd'

type Props = {
  menuExtraRender?: () => React.ReactNode
  menuItemRender?: (
    item: MenuDataItem & {
      isUrl: boolean
      onClick: () => void
    },
    defaultDom: React.ReactNode,
    menuProps: MenuProps | any
  ) => React.ReactNode | undefined
  menuDataRender?: (menuData: MenuDataItem[]) => MenuDataItem[]
  menuFooterRender?: (props?: any) => React.ReactNode
  menuProps?: MenuProps
  children?: React.ReactNode
}

function Layout(props: Props) {
  const { menuExtraRender = () => <></>, menuItemRender = () => undefined } = props
  return (
    <ProLayout
      title={import.meta.env.VITE_APP_TITLE}
      logo={import.meta.env.VITE_APP_LOGO}
      layout="mix"
      splitMenus={false}
      contentWidth="Fluid"
      fixedHeader
      fixSiderbar
      contentStyle={{
        height: 'calc(100vh - 56px)',
        background: '#fff'
      }}
      siderMenuType="group"
      style={{
        background: '#fff'
      }}
      menu={{
        hideMenuWhenCollapsed: true,
        locale: false,
        collapsedShowGroupTitle: false
      }}
      suppressSiderWhenMenuEmpty
      siderWidth={300}
      menuExtraRender={menuExtraRender}
      menuItemRender={menuItemRender}
      menuDataRender={props.menuDataRender}
      avatarProps={{
        src: 'http://rpa-docs.datagrand.com/v13_6/images/logo.png',
        size: 'small',
        render: (props, dom) => <>{dom}</>
      }}
      menuFooterRender={props.menuFooterRender}
      menuProps={props.menuProps}
      breadcrumbRender={() => []}
    >
      {props.children}
    </ProLayout>
  )
}

export default Layout
