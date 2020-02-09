class MountainsController < ApplicationController

    skip_before_action :verify_authenticity_token, raise: false

  def new

  end

  def create
    Mountain.create(
      name: params[:name],
      height: params[:height],
      range: params[:range],
      parent_mountain: params[:parent_mountain],
      first_ascended: params[:first_ascended],
      country: params[:country],
      image_url: params[:image_url]

    )
    redirect_to(mountains_path)
  end

  def index
    @mountains = Mountain.all
  end

  def show
    @mountain = Mountain.find params[:id]
  end

  def edit
    @mountain = Mountain.find params[:id]
  end

  def update
    mountain = Mountain.find params[:id]
    mountain.update(
      name: params[:name],
      height: params[:height],
      range: params[:range],
      parent_mountain: params[:parent_mountain],
      first_ascended: params[:first_ascended],
      country: params[:country],
      image_url: params[:image_url]
    )
    redirect_to(mountain_path)
  end

  def destroy
    Mountain.destroy params[:id]
    redirect_to(mountains_path)
  end

end
