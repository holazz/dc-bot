import axios from 'axios'

export async function getMessages(token, channelId, limit = 50) {
  try {
    const res = await axios.get(`https://discord.com/api/v9/channels/${channelId}/messages`, {
      params: {
        limit,
      },
      headers: {
        Authorization: token,
      },
    })
    return res.data
  } catch (e) {
    return [
      {
        content: '🚀',
      },
    ]
  }
}

export async function sendMessage(token, channelId, message) {
  try {
    const res = await axios.post(
      `https://discord.com/api/v9/channels/${channelId}/messages`,
      {
        mobile_network_type: 'unknown',
        content: message,
        nonce: `${Date.now()}${Math.floor(Math.random() * 100000)}`,
        tts: false,
        flags: 0,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    )
    return res.data
  } catch (e) {
    return e.response.data
  }
}
