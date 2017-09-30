class Message < ApplicationRecord
  validates :author, presence: true
  validates :text,   presence: true
end
