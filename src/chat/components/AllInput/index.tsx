import { AutoComplete, Button, Input } from 'antd';
import styles from './index.module.less';
import { ClearOutlined, SyncOutlined } from '@bixi-design/icons';
import React, { useMemo, useState } from 'react';
import { promptStore } from '../../store';

interface Props {
  onSend: (value: string) => void;
  disabled?: boolean;
  clearMessage?: () => void;
  onStopFetch?: () => void;
}

function AllInput(props: Props) {
  const [prompt, setPrompt] = useState('');
  const { localPrompt } = promptStore();

  const searchOptions = useMemo(() => {
    if (prompt.startsWith('/')) {
      return localPrompt
        .filter((item: { key: string }) => item.key.toLowerCase().includes(prompt.substring(1).toLowerCase()))
        .map((obj) => {
          return {
            label: obj.key,
            value: obj.value
          };
        });
    }
    return [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prompt]);

  return (
    <div className={styles.allInput}>
      <div
        className={styles.allInput_icon}
        onClick={() => {
          props?.clearMessage?.();
        }}
      >
        <ClearOutlined />
      </div>
      <AutoComplete
        value={prompt}
        options={searchOptions}
        style={{
          width: '100%',
          maxWidth: 800
        }}
        onSelect={(value) => {
          // 这里选择后直接发送
          //   props?.onSend?.(value)
          // 并且将输入框清空
          // 修改为选中放置在输入框内
          setPrompt(value);
        }}
      >
        <Input.TextArea
          value={prompt}
          // showCount
          size='large'
          placeholder='问点什么吧...'
          // (Shift + Enter = 换行)
          autoSize={{
            maxRows: 4
          }}
          onPressEnter={(e) => {
            if (e.key === 'Enter' && e.keyCode === 13 && e.shiftKey) {
              // === 无操作 ===
            } else if (e.key === 'Enter' && e.keyCode === 13) {
              if (!props.disabled) {
                props?.onSend?.(prompt);
                setPrompt('');
              }
              e.preventDefault(); //禁止回车的默认换行
            }
          }}
          onChange={(e) => {
            setPrompt(e.target.value);
          }}
        />
      </AutoComplete>

      {props.disabled ? (
        <Button
          className={styles.allInput_button}
          type='primary'
          size='large'
          ghost
          danger
          disabled={!props.disabled}
          onClick={() => {
            props.onStopFetch?.();
          }}
        >
          <SyncOutlined spin /> 停止回答 🤚
        </Button>
      ) : (
        <Button
          className={styles.allInput_button}
          type='primary'
          size='large'
          disabled={!prompt || props.disabled}
          onClick={() => {
            props?.onSend?.(prompt);
            setPrompt('');
          }}
        >
          发送
        </Button>
      )}
    </div>
  );
}

export default AllInput;
