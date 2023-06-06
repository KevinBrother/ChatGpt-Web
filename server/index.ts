import express from 'express';
import path from 'path';
import cors from 'cors';
import { sendEventStream } from './event-stream';

const app = express();

app.use(cors());

// 获取静态目录
app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.all('/api/*', (req, res) => {
  sendEventStream(req, res);
  // res
  //   .status(200)
  //   .json({ code: -1, data: [], message: 'The current access API address does not exist' })
});

// 渲染页面
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

// 启动服务器
app.listen(3200, () => {
  console.log('Server is running on port 3200');
});

/* {
    "code": 0,
    "data": {
        "id": "chatcmpl-7MYG6iuHaz62ON7gsIG2RBqswc0JR",
        "object": "chat.completion",
        "created": 1685609262,
        "model": "gpt-3.5-turbo-0301",
        "usage": {
            "prompt_tokens": 454,
            "completion_tokens": 790,
            "total_tokens": 1244
        },
        "choices": [
            {
                "message": {
                    "role": "assistant",
                    "content": "哈哈航啊"
                },
                "finish_reason": "stop",
                "index": 0
            }
        ]
    },
    "message": ""
}
 */
