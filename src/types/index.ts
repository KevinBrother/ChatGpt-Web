export interface ChatGptConfig {
  // api
  // api: string
  // api-key
  // api_key?: string
  // 模型
  model: string
  // 输出随机性 0 - 2
  temperature?: number
  // 惩罚性质 -2 - 2
  presence_penalty?: number
  // 惩罚频率 -2 - 2
  frequency_penalty?: number
  // 携带历史消息数
  // limit_message?: number
  // 单次回复限制
  max_tokens?: number
  stream?: boolean
}

export interface PromptInfo {
  key: string
  value: string
}

export interface RequestChatOptions {
  prompt: string
  options: ChatGptConfig
  parentMessageId?: string
}
// 请求Openai 或者 其他代理
export interface RequestOpenChatOptions {
  model: string
  messages: Array<{
    role: 'assistant' | 'user' | string
    content: string
  }>
  // 输出随机性 0 - 2
  temperature?: number
  // 惩罚性质 -2 - 2
  presence_penalty?: number
  // 惩罚频率 -2 - 2
  frequency_penalty?: number
  // 单次回复限制
  max_tokens?: number
  stream?: boolean
}

export interface ChatsInfo {
  path: string
  id: string
  name: string
  data: Array<ChatGpt>
}

export interface ChatResultInfo {
  id: string
  role: string
  text: string
  dateTime: string
  segment: string
}

// 对话记录
export interface ChatGpt {
  id: string | number
  text: string
  dateTime: string
  status: 'pass' | 'loading' | 'error'
  role: 'assistant' | 'user' | string
  requestOptions: RequestChatOptions
}
