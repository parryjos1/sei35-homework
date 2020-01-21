class BandsController < ApplicationController

  skip_before_action :verify_authenticity_token, raise: false
  # CREATE

  # Step 1. Create a form to add band
  def new

  end

  # Step 2. Add bands to db with .create
  def create

    Band.create(
      name: params[:name],
      genre: params[:genre],
      image: params[:image]
    )

    redirect_to bands_path
  end

  # READ

  # Step 1: Show all bands
  def index
    @band = Band.all
  end

  # Step 2: Show single band info
  def show
    @band = Band.find params[:id]
  end

  # EDIT
  # Pre-fill data
  def edit
    @band = Band.find params[:id]
  end

  def update
    band = Band.find params[:id]
    band.update(
      name: params[:name],
      genre: params[:genre],
      image: params[:image]
    )

    redirect_to band_path band.id
  end

  def destroy
    Band.destroy params[:id]

    redirect_to bands_path
  end

  end
