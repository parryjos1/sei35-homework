class LuckynumberController < ApplicationController

  def lucky_number

    rand(1..10)

  end

  def guess

  end

  def reveal

    @lucky_number = lucky_number

    if params[:number_guess].to_i == @lucky_number
      @result = 'CONGRATULATIONS!'
    else
      @result = 'unlucky!'
    end

  end

end
