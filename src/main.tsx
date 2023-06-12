import React from 'react';
import ReactDOM from 'react-dom/client';
import Global from './chat/components/Global';
/* import './chat/styles/global.less';
import './chat/styles/markdown.less';
import './chat/styles/highlight.less'; */
import { ChatComponent } from './chat';
import './main.less';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Global>
    <div className='main'>
      <div className='header'>header</div>
      <div className='main'>
        <div className='side'>asdfa;fad</div>
        <div className='content'>
          <ChatComponent />
        </div>
      </div>
    </div>
  </Global>
);
