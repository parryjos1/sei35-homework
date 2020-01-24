class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]

  def index
   @posts = Post.all.order("created_at DESC")
  end



  def show

  end



  def edit

  end




  def new
    @post = Post.new
  end


  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to @post, notice: "You created a post"
    else
      render :new, alert: "Your post was'nt created"
    end
  end

 def update
    if @post.update(post_params)
      redirect_to @post, notice: "Post was successfully updated"
    else
   render :edit, alert: "Your post wasn't updated"
    end
 end


 def destroy
   @post.destroy

   redirect_to posts_path, notice: "Your post was deleted!"

 end


  private

def set_post
    @post = Post.find(params[:id])
end

  def post_params
    params.require(:post).permit(:title, :body)
  end

end
