class SignsController < ApplicationController
  # Bypass
  skip_before_action :verify_authenticity_token, raise: false

  # CREATE

  # 1. New blank form
  def new
  end

  # 2. Form submit, create, redirect
  def create
    Sign.create(
      name: params[:name],
      date: params[:date],
      house: params[:house],
      info: params[:info]
    )

    # Create actions have no template of their own, and we also
    # want to avoid accidental form resubmission; so we redirect
    redirect_to( signs_path ) # /signs
  end

  # READ

  # 1. Index of signs
  def index
    # @signs = Sign.all
  end


  # 2. details page for one sign
  def show
    # Because of the '/signs/:id' route,
    # we get access to the ID used in the URl
    # in the params variable; so if the URl
    # was /signs/25, the variable params[:id]
    # will contain the string '25'
    @sign = Sign.find params[:id]
  end

  # UPDATE

  # 1. Pre-filled edit Form
  def edit
    @sign = Sign.find params[:id]
  end

  # 2. Form submit, update DB, redirect
  def update
    sign = Sign.find params[:id]

    sign.update(
      name: params[:name],
      image: params[:image],
      date: params[:date],
      house: params[:house],
      info: params[:info]
    )

    redirect_to sign_path(sign.id)
  end

  # DESTROY
  def destroy
    Sign.destroy params[:id]

    # redirect to the index, /signs
    redirect_to(signs_path)
  end

end
