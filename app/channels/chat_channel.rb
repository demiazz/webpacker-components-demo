class ChatChannel < ApplicationCable::Channel
  def subscribe_to_channel
    @reject_subscription = !current_user.present?

    super
  end
end
