class Photo < ApplicationRecord
	has_many :comments


	def highest_rating_comment
	  comments.rating_desc.first
	end

	def average_rating
		comments.average(:rating).to_f
	end
end