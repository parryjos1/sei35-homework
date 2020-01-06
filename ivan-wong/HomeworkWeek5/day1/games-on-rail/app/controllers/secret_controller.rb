class SecretController < ApplicationController
  def answer
    randomNumber = rand 1..10
    if params[:question].to_i == randomNumber
      @output = "correct"
    else
      @output = "wrong"
    end
  end
end
