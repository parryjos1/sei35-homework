class ArtistsController < ApplicationController

  def new
    @artist = Artist.new
  end

  def create
    Artist.create artist_params

    redirect_to artists_path
  end

  def index

    @artists = Artist.all

  end

  def show
    @artist = Artist.find params[:id]

  end

  def edit
    @artist = Artist.find params[:id]

  end

  def update
    artist = Artist.find params[:id]
    artist.update  artist_params

    redirect_to artist_path(artist.id)
  end

  def destroy
    Artist.destroy params[:id]


    redirect_to artists_path
  end


  private
  def artist_params
    params.require(:artist).permit(:name, :nationality, :dob, :period, :image, :roundness, :bio)
  end


end
