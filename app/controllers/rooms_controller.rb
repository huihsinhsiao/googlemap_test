class RoomsController < ApplicationController
  def show
    ActionCable.server.broadcast("chat_room_channel", {message: "hello"})
  end
end
