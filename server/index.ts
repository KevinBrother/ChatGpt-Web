import express from 'express'
import path from 'path'
import cors from 'cors'
import { sendEventStream } from './event-stream'

const app = express()

app.use(cors())

// 获取静态目录
app.use(express.static(path.join(__dirname, '../dist')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.all('/api/*', (req, res) => {
  sendEventStream(req, res)
  // res
  //   .status(200)
  //   .json({ code: -1, data: [], message: 'The current access API address does not exist' })
})

// 渲染页面
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'))
})

// 启动服务器
app.listen(3200, () => {
  console.log('Server is running on port 3200')
})

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
                    "content": "具体分数及其评分依据：\nTask Response: 8\nThe essay addresses both sides of the argument and presents a clear opinion.\n\nCoherence and Cohesion: 7\nThe essay is well-organized and easy to follow, but there are some minor issues with cohesion.\n\nLexical Resource: 7\nThe essay uses a good range of vocabulary, but there are some errors and some repetition.\n\nGrammatical Range and Accuracy: 7\nThe essay demonstrates good control of grammar and sentence structure, but there are some errors.\n\nOverall Score: 7.5\n\n文章修改意见：\n1. 在第一段中，可以更清晰地表达自己的观点，例如“Personally, I believe that a university education should be a universal right, but there are valid arguments on both sides of the issue.”\n\n2. 在第二段中，可以更具体地说明为什么年轻人认为他们有权利接受大学教育，例如提供一些数据或案例。\n\n3. 在第三段中，可以更具体地说明为什么一些人认为大学教育不值得，例如提供一些具体的例子。\n\n4. 在第四段中，可以更具体地说明为什么一些人认为大学教育只是延迟了年轻人进入职场的时间，例如提供一些数据或案例。\n\n5. 在整篇文章中，可以更多地使用连接词和短语，以提高文章的连贯性和流畅性。\n\n满分范文：\n\nIn many countries, it is becoming increasingly common for young adults to attend college or university. While some argue that too many students are pursuing higher education, others believe that a university education should be a universal right. In this essay, I will examine both sides of the argument and present my own opinion.\n\nOn the one hand, those who argue that too many students are attending university often point to the high cost of tuition and the fact that many graduates end up in jobs that do not require a degree. They argue that young people would be better off gaining practical skills in the workplace, rather than spending years in the classroom. Furthermore, they argue that the emphasis on university education has led to a shortage of skilled workers in other fields, such as trades and technical professions.\n\nOn the other hand, those who believe that a university education should be a universal right argue that education is a fundamental human right, and that everyone should have the opportunity to pursue their dreams and reach their full potential. They argue that a university education provides young people with critical thinking skills, problem-solving abilities, and a broad knowledge base that will serve them well in any career. Furthermore, they argue that a university education is essential for many high-paying jobs in fields such as medicine, law, and engineering.\n\nIn my opinion, a university education should be a universal right. While it is true that not all jobs require a degree, a university education provides young people with a range of skills and knowledge that will serve them well in any career. Furthermore, a university education is essential for many high-paying jobs, and denying young people the opportunity to pursue these careers would be unfair and unjust. Finally, education is a fundamental human right, and everyone should have the opportunity to pursue their dreams and reach their full potential.\n\nIn conclusion, while there are valid arguments on both sides of the issue, I believe that a university education should be a universal right. By providing young people with critical thinking skills, problem-solving abilities, and a broad knowledge base, we can help them to succeed in any career and reach their full potential."
                },
                "finish_reason": "stop",
                "index": 0
            }
        ]
    },
    "message": ""
}
 */
