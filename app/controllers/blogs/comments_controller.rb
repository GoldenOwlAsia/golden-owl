class Blogs::CommentsController < ApplicationController
  def index
    @comments = Comment.all
  end
  def update;end
  def create
    @post = Post.find(params[:post_id])
    @comment = @post.comments.create(comment_params)
    @comment.user_id = current_user.id
    respond_to do |format|
    if @comment.save
      format.html { redirect_to blogs_post_detail_path(@post.title.to_url, @post.id), notice: 'Post was successfully created.' }
    else
      flash.now[:danger] = "error"
    end
  end
  end
  def show
    @comment = comment.find(params[:id])
  end
  private
  # Use callbacks to share common setup or constraints between actions.
  def set_comment
    @comment = Comment.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def comment_params
    params.require(:comment).permit(:post_id, :content, :user_id)
  end
end

