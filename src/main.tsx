import React from 'react';
import ReactDOM from 'react-dom/client';
import Global from './chat/components/Global';
/* import './chat/styles/global.less';
import './chat/styles/markdown.less';
import './chat/styles/highlight.less'; */
import { ChatPage } from './chat';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Global>
    <ChatPage />
  </Global>
);
