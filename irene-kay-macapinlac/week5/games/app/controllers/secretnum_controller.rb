class SecretnumController < ApplicationController

  def form
  end

  def results

    # Generates a number between 1 and 10 (also INCLUDES them)
    # can also write as rand 1..10

    @random_num = Random.rand(1..10)
    @user_num = params[:guessed_num]


    if (@user_num == @random_num)
      puts "YOU WIN!"
    else
      puts "Awwwww, try again!"
    end


    binding.pry

    # @results = response['results']

  end


end
