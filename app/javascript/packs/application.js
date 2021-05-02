// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

document.addEventListener('turbolinks:load', function() {
  document.getElementById("send_message").addEventListener('submit', function(e) {
    e.preventDefault()
    let message = document.getElementById("message").value
    if (message.length > 0) {
      chatRoomChannel.speak(message)
    }
  })

  document.getElementById("set_name").addEventListener('submit', function(e) {
    e.preventDefault()
    chatRoomChannel.announce({name, type:'join'})
    let name = document.getElementById('add_name').value
    sessionStorage.setItem('chat_room_name', name)
    document.getElementById("modal").style.display = 'none'
  })
})


import chatRoomChannel from "../channels/chat_room_channel"
import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()
