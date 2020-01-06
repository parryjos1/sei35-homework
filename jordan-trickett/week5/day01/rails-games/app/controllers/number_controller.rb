class NumberController < ApplicationController

  def form

  end

  def checker

    @guess = params[:user_input].to_i

    @rand_number = rand(1..10)

    @response = ""

    if @rand_number == @guess
      @response += "correct"
    else
      @response += "better luck next time"
    end


  end


end
