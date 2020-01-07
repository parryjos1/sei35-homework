class MonkeysController < ApplicationController

  skip_before_action :verify_authenticity_token, raise: false

  def new

  end

  def create

    Monkey.create(
      name: params[:name],
      native_country: params[:native_country],
      height: params[:height],
      weight: params[:weight],
      lifespan: params[:lifespan],
      image: params[:image]
    )

    redirect_to(monkeys_path)

  end

  def index
    @monkeys = Monkey.all
  end

  def show
    @monkey = Monkey.find params[:id]
  end

  def edit

    @monkey = Monkey.find params[:id]

  end

  def update

    monkey = Monkey.find params[:id]

    monkey.update(
      name: params[:name],
      native_country: params[:native_country],
      height: params[:height],
      weight: params[:weight],
      lifespan: params[:lifespan],
      image: params[:image]
    )

    redirect_to monkey_path(monkey.id)

  end

  def destroy

    Monkey.destroy params[:id]

    redirect_to monkeys_path

  end

end
