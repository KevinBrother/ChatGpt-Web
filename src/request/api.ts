import { RequestChatOptions } from '@/types'
import { EventSourceMessage, fetchEventSource } from '@microsoft/fetch-event-source'
import request from '.'
// 请求对话
export function prePostChatCompletions(
  params: RequestChatOptions,
  config?: {
    headers?: { [key: string]: any }
    options?: { [key: string]: any }
  }
) {
  return request.postStreams<Response>('/chat/completions', params, config)
}

export function postChatCompletions(
  requestOptions: RequestChatOptions,
  signal: AbortSignal,
  config?: {
    headers?: { [key: string]: any }
    options?: { [key: string]: any }
  },
  onmessage?: (ev: EventSourceMessage) => void
) {
  // return request.postStreams<Response>('/chat/completions', params, config)
  const body = {
    messages: [
      {
        role: 'user',
        content: requestOptions.prompt
      }
    ],
    model: 'gpt-3.5-turbo',
    stream: true
  }

  const url = 'https://api.openai.com/v1/chat/completions'
  const params = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_GPT_API_KEY}`
    }
  }
  fetchEventSource(url, {
    ...params,
    signal,
    onmessage
  })
}
