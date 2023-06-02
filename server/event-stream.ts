import { Writable, Transform } from 'stream'

export function sendEventStream(req, res) {
  console.log('%c [ req ]-4', 'font-size:13px; background:pink; color:#bf2c9f;', req.url)
  const writableStream = new Writable({
    write(chunk, encoding, callback) {
      // 将数据写入到响应中
      res.write(chunk, encoding)
      callback()
    }
  })

  const eventStream = new Transform({
    transform(chunk, encoding, callback) {
      // 处理数据块
      this.push(chunk)
      callback()
    }
  })

  eventStream.pipe(writableStream)

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive'
  })
  // res.write('data: hello\n\n')

  setInterval(() => {
    const data = { time: 'Current time is: ' + new Date().toLocaleTimeString() }
    eventStream.write(`data: ${JSON.stringify(data)}\n\n`)
    console.log(111)
  }, 1000)
}
