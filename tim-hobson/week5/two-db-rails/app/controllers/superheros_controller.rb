class SuperherosController < ApplicationController
  def new
    @superhero = Superhero.new
  end

  def create
    Superhero.create superhero_params

    redirect_to superheros_path
  end

  def index
    @superheroes = Superhero.all
  end

  def show
    @superhero = Superhero.find params[:id]
  end

  def edit
    @superhero = Superhero.find params[:id]
  end

  def update
    superhero = Superhero.find params[:id]

    superhero.update superhero_params

    redirect_to superhero_path superhero.id
  end

  def destroy
    Superhero.destroy params[:id]

    redirect_to superheros_path
  end

  private

  def superhero_params
    params.require(:superhero).permit( :name, :alterego, :home, :publisher, :bio, :image, :power)
  end

end
