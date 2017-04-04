class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :photo
  scope :rating_desc, -> { order(rating: :desc) }
end
