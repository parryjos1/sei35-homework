class SecretnumController < ApplicationController

  def form
  end

  def results

    # Generates a number between 1 and 10 (also INCLUDES them)
    # can also write as rand 1..10

    @random_num = Random.rand(1..10)
    @user_num = params[:guessed_num].to_i

    result_true = "YOU WIN!"

    result_false = "Awwwww, try again!"

      # if (@user_num == @random_num)
      #   puts "YOU WIN!"
      # else
      #   puts "Awwwww, try again!"
      # end

      @result = @user_num == @random_num ? result_true : result_false

    # binding.pry


  end


end
