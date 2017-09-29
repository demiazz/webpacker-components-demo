class ChatController < ApplicationController
  before_action :authenticate!

  def show; end

  private

  def authenticate!
    redirect_to login_path unless session[:username]
  end
end
