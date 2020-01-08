class MountainsController < ApplicationController
  def index
    @mountains = Mountain.all
  end
  def display
    @findMountain = Mountain.find(params[:id])
  end
  def creation
    Mountain.create(
      name: params[:name],
      height: params[:height],
      image: params[:image],
      first: params[:first],
      date: params[:date]
    )
    redirect_to("/index")
  end
  def edit
    @findMountain = Mountain.find(params[:id])
  end
  def editing
    mountain = Mountain.find(params[:id])
    Mountain.update(
      name: params[:name],
      height: params[:height],
      image: params[:image],
      first: params[:first],
      date: params[:date]
    )
    redirect_to("/index")
  end
  def destroy
    Mountain.destroy params[:id]
    redirect_to("/index")
  end
  skip_before_action :verify_authenticity_token, raise: false
end
