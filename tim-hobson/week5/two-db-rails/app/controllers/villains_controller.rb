class VillainsController < ApplicationController
  def new
    @villain = Villain.new
    @superheros = Superhero.all
  end

  def create
    Villain.create villain_params

    redirect_to villains_path
  end

  def index
    @villains = Villain.all
  end

  def show
    @villain = Villain.find params[:id]
  end

  def edit
    @villain = Villain.find params[:id]
    @superheros = Superhero.all
  end

  def update
    villain = Villain.find params[:id]

    villain.update villain_params

    redirect_to villain_path villain.id
  end

  def destroy
    Villain.destroy params[:id]

    redirect_to villains_path
  end

  private

  def villain_params
    params.require(:villain).permit( :name, :alterego, :home, :publisher, :bio, :image, :power, :superhero_id)
  end

end
