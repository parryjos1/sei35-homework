class SecretnumController < ApplicationController  #inherits from ApplicationController class.

  #create method
  def form
  end

  def answer

    #links to views.erb template file with the same name.
    @secret_number = 8

    @guess = params[:guess].to_i

    if @secret_number == @guess
      @result = "You guessed correctly"
    else
      @result = "Guess again"
    end

  end

end
