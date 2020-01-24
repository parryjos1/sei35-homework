
class JordansController < ApplicationController

 skip_before_action :verify_authenticity_token, raise: false

#Create
#form
  def new

  end

#process
  def create

    Jordan.create(
      name: params[:name],
      year: params[:year],
      designer: params[:designer],
      price: params[:price],
      image: params[:image]
    )

    redirect_to jordans_path
  end


#read
#index
  def index

    @jordans = Jordan.all

  end

#show
  def show

    @jordan = Jordan.find params[:id]

    @jordans = Jordan.all

  end

#update
#Edit
  def edit

    @jordan = Jordan.find params[:id]

  end

#process
  def update

    jordan = Jordan.find params[:id]

    jordan.update(
      name: params[:name],
      year: params[:year],
      designer: params[:designer],
      price: params[:price],
      image: params[:image]
    )

    redirect_to jordan_path( jordan.id )
  end


#Destroy
  def destroy

    Jordan.destroy params[:id]

    redirect_to jordans_path

  end



end
