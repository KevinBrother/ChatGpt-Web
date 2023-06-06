import useDocumentResize from '../../hooks/useDocumentResize';
import styles from './index.module.less';
import React from 'react';

interface Props {
  title: string;
  describe: string;
  children?: React.ReactNode;
}

function FormItemCard(props: Props) {
  const { width } = useDocumentResize();

  return (
    <div
      className={styles.formItemCard}
      style={{
        flexDirection: width < 600 ? 'column' : 'row',
        alignItems: width < 600 ? 'normal' : 'center'
      }}
    >
      <div className={styles.formItemCard_text}>
        <p>{props.title}</p>
        <span>{props.describe}</span>
      </div>
      <div className={styles.formItemCard_field}>{props.children}</div>
    </div>
  );
}

export default FormItemCard;
