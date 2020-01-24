class WavesController < ApplicationController
# CRUD

  # CREATE
  # 1. Form to add new wave
  def new
    @wave = Wave.new
  end
  # 2. add to wave to db
  def create
    Wave.create waves_params

    redirect_to waves_path
  end
  # READ
  # 1. list all waves in db
  def index
    @waves = Wave.all
  end
  # 2. show individual wave
  def show
    @wave = Wave.find params[:id]
  end

  # Edit
  # 1. Pre-filled Form
  def edit
    @wave = Wave.find params[:id]
  end

  # 2. Update the Form
  def update
    wave = Wave.find params[:id]
    wave.update waves_params

    redirect_to wafe_path(wave.id)
  end

  # Destroy
  def destroy
    Wave.destroy params[:id]

    redirect_to waves_path
  end
  private
  def waves_params
    params.require(:wave).permit(:name, :country, :size, :image)
  end
end
