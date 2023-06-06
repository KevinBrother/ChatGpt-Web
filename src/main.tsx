import React from 'react';
import ReactDOM from 'react-dom/client';
import Global from './pages/chat/components/Global';
import OpenAiLogo from './pages/chat/components/OpenAiLogo';

import './pages/chat/styles/global.less';
import './pages/chat/styles/markdown.less';
import './pages/chat/styles/highlight.less';
import ChatPage from './pages/chat/page';

/* ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Global>
      <React.Suspense
        fallback={
          <div
            style={{
              width: '100vw',
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <OpenAiLogo rotate width="3em" height="3em" />
          </div>
        }
      >
        <App />
      </React.Suspense>
    </Global>
  </BrowserRouter>
) */

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Global>
    <ChatPage />
  </Global>
);
