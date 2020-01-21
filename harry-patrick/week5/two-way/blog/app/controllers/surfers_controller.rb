class SurfersController < ApplicationController
  #CRUD

  # CREATE
  # 1. Form to add new surfer
  def new
    @surfer = Surfer.new
    @wave = Wave.find(params[:wave_id])
  end
  # 2. create and add surfer to db
  def create
    @wave = Wave.find(params[:wave_id])
    @surfer = @wave.surfers.create(surfers_params)

    redirect_to waves_path
  end



  # @article = Article.find(params[:article_id])
  #   @comment = @article.comments.create(comment_params)
  #   redirect_to article_path(@article)





  private
  def surfers_params
    params.require(:surfer).permit(:name, :gnar,  :stance)
  end
end
