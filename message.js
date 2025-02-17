import 'dotenv/config'
import accounts from './accounts.js'
import { getMessages, sendMessage } from './api.js'

const channelId = process.env.CHANNEL_ID

async function run(channelId) {
  const messages = await getMessages(accounts[0].token, channelId, 100)
  const promises = accounts.map(async (account, index) => {
    const message = messages[Math.floor(Math.random() * 80) + 20]?.content || '🚀'
    await sendMessage(account.token, channelId, message)
    console.log(`[Account ${index + 1}] ${message}`)
  })
  await Promise.all(promises)
}

run()
