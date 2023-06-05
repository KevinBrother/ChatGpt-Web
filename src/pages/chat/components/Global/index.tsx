import { configStore } from '../../store'
import ConfigModal from '../ConfigModal'
import React from 'react'

type Props = {
  children: React.ReactElement
}

function Global(props: Props) {
  const { models, config, configModal, changeConfig, setConfigModal } = configStore()

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
