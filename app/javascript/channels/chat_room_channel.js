import consumer from "./consumer"

const chatRoomChannel =
consumer.subscriptions.create("ChatRoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log("Connected to the chat room!")
  },
  
  disconnected() {
    // Called when the subscription has been terminated by the server
    console.log("see you!")
  },
  
  received(data) {
    // Called when there's incoming data on the websocket for this channel
    const message_tag = document.createElement("p")
    if (data.message) {
      //message from user
      let current_name = sessionStorage.getItem('chat_room_name')
      let msg_class = data.sent_by === current_name ? "sent" : "received"
      message_tag.textContent = data.message
      message_tag.classList.add(msg_class)
      document.getElementById('messages').append(message_tag)
    } else if (data.chat_room_name) {
      //join or leave message
      let name = data.chat_room_name
      let announcement_type = data.type == 'join' ? 'joined' : 'left'
      message_tag.textContent = name + " " + announcement_type + "the chat room"
      message_tag.classList.add("announce")
      document.getElementById('messages').append(message_tag)
    }
    // console.log("testing")
  },

  speak(message) {
    let name = sessionStorage.getItem('chat_room_name')
    this.perform('speak', {message: message, name: name})
  },

  announce(content) {
    this.perform('announce', {name: content.name, type: content.type})
  }
})

export default chatRoomChannel

