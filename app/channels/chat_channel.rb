class ChatChannel < ApplicationCable::Channel
  def subscribe_to_channel
    @reject_subscription = !current_user.present?

    super
  end

  def subscribed
    stream_from "chat"
  end

  def send_message(payload)
    message = Message.new(author: current_user, text: payload["message"])

    if message.save
      ActionCable.server.broadcast "chat", message: render(message)
    end
  end

  private

  def render(message)
    ApplicationController.new.helpers.c("message", message: message)
  end
end
