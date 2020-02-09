class SecretnumberController < ApplicationController
  def pick_number

  end

  def show_result
    input_num = params[:number].to_i
    rand_num = rand 1..10
    @result = ""
    # binding.pry
    if rand_num == input_num
      @result = "You guessed correctly!"
    else
      @result = "Wrong guess! Please try again!"
    end
  end
end
