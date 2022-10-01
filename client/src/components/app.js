import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import { io } from 'socket.io-client'
import Feed from './feed'
import('../style/app.css')

const App = () => {
  const [feeds, setFeeds] = useState([])
  const [message, setMessage] = useState('')
  const [socket, setSocket] = useState()

  useEffect(() => {
    const s = io('http://localhost:3000', {
      transports: ['websocket', 'polling', 'flashsocket'],
    })
    setSocket(s)
    s.on('connect', () => {
      setFeeds((prevFriends) => [...prevFriends, 'connected'])
    })

    s.on('dispatchMessage', (newMessage) => {
      setFeeds((prevFriends) => [...prevFriends, newMessage])
    })
  }, [])

  const sendMessage = (event) => {
    event.preventDefault()
    const newMessage = event.target[0].value

    if (!newMessage || newMessage === '') {
      return
    }

    socket.emit('sendMessage', newMessage)
    setMessage('')
  }

  return (
    <div id="app">
      <div class="chat">
        <h1 class="title">msg.</h1>
        <Feed feeds={feeds} />
        <form class="form" onSubmit={sendMessage}>
          <input
            class="messageInput"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" value="Submit">
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
