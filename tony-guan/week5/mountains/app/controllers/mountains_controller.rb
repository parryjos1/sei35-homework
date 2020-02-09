
class MountainsController < ApplicationController

skip_before_action :verify_authenticity_token, raise: false

  #Create



  #READ
  def index
    @mountains = Mountain.all
  end

  def show
    @mountain = Mountain.find params[:id]
  end

end
  #UPDATE



  #DESTROY
