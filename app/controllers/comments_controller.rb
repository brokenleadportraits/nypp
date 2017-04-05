class CommentsController < ApplicationController

	def index
		@comment = @photo.comments.paginate(:page => params[:page], :per_page => 5)
	end
	
	def create
		@photo = Photo.find(params[:photo_id])
		@comment = @photo.comments.new(comment_params)
		@comment.user = current_user
		respond_to do |format|
      if @comment.save
        format.html { redirect_to @photo, notice: 'Thanks! Your comment was posted.' }
        format.json { render :show, status: :created, location: @photo }
      else
        format.html { redirect_to @photo, alert: 'Comment needs content and rating to be posted.' }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
	end

	def destroy
	end

	private

	  def comment_params
	    params.require(:comment).permit(:user_id, :body, :rating)
	  end
end


