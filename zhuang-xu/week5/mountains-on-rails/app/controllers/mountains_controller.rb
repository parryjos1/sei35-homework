class MountainsController < ApplicationController
  skip_before_action :verify_authenticity_token, raise: false

  def index
    @columns = Mountain.column_names
    @mountains = Mountain.all
  end

  def new
    @columns = Mountain.column_names.select { |column| column != 'id' }
  end

  def show
    @columns = Mountain.column_names
    @mountain = Mountain.find params[:id]
  end

  def edit
    @columns = Mountain.column_names
    @mountain = Mountain.find params[:id]
  end

  def create
    Mountain.create mountain_params

    redirect_to mountains_path
  end

  def update
    mountain = Mountain.find params[:id]

    mountain.update mountain_params

    redirect_to mountain_path params[:id]
  end

  def destroy
    Mountain.destroy params[:id]

    redirect_to mountains_path
  end

  private def mountain_params
    params.permit(:name, :height, :country, :longitude, :latitude, :first_ascent_year, :range)
  end
end
