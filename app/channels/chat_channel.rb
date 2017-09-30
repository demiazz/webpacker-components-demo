class ChatChannel < ApplicationCable::Channel
  def subscribe_to_channel
    @reject_subscription = !current_user.present?

    super
  end

  def send_message(payload)
    Message.create(author: current_user, text: payload["message"])
  end
end
