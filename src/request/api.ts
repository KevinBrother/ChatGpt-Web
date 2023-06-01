import { RequestChatOptions } from '@/types'
import request from '.'

// 请求对话
export function postChatCompletions(
  params: RequestChatOptions,
  config?: {
    headers?: { [key: string]: any }
    options?: { [key: string]: any }
  }
) {
  return request.postStreams<Response>('/chat/completions', params, config)
}
