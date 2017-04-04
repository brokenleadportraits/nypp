class CommentsController < ApplicationController
	def create
		@photo = Photo.find(params[:photo_id])
		@comment = @photo.comments.new(comment_params)
		@comment.user = current_user
		@comment.save
		redirect_to photo_path(@photo)
	end

	def destroy
	end

	private

	  def comment_params
	    params.require(:comment).permit(:user_id, :body, :rating)
	  end
end


