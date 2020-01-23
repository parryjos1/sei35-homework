class WorksController < ApplicationController
  def new
    @work =  Work.new
    @artists = Artist.all
  end

  def create
    Work.create work_params

    redirect_to works_path
  end

  def index
    @works = Work.all
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
  def work_params
    params.require(:work).permit(:title, :year, :medium, :style, :image, :artist_id)
  end

end
