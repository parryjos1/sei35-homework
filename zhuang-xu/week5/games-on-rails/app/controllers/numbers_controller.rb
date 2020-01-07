class NumbersController < ApplicationController
  def result
    @number = params[:number]
    @result = rand(1..10) == @number.to_i ? 'Correct' : 'Incorrect'
    @result
  end
end
