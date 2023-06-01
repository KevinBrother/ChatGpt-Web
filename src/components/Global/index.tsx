import { configStore } from '@/store'
import { useLayoutEffect } from 'react'
import ConfigModal from '../ConfigModal'
import { notification } from 'antd'
import React from 'react'

type Props = {
  children: React.ReactElement
}

function Global(props: Props) {
  const { models, config, configModal, changeConfig, setConfigModal, notifications } = configStore()

  const openNotification = ({
    key,
    title,
    content
  }: {
    key: string | number
    title: string
    content: string
  }) => {
    return notification.open({
      key,
      message: title,
      description: (
        <div
          dangerouslySetInnerHTML={{
            __html: content
          }}
        />
      ),
      onClick: () => {
        console.log('Notification Clicked!')
      }
    })
  }

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  async function onOpenNotifications() {
    for (const item of notifications) {
      await openNotification({
        key: item.id,
        title: item.title,
        content: item.content
      })
      await delay(500)
    }
  }

  useLayoutEffect(() => {
    onOpenNotifications()
  }, [notification])

  return (
    <>
      {props.children}
      <ConfigModal
        open={configModal}
        onCancel={() => {
          setConfigModal(false)
        }}
        models={models}
        onChange={changeConfig}
        data={config}
      />
    </>
  )
}
export default Global
