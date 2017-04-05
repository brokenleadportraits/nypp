class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :photo
  scope :rating_desc, -> { order(rating: :desc) }
	validates :body, presence: true
	validates :user, presence: true
	validates :photo, presence: true
	validates :rating, numericality: { only_integer: true }
end
