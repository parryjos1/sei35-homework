class SecretnumberController < ApplicationController

  def number
  end

  def result
    @secret_num = rand 1..10
    @guessed_num = params[:num]
    @win = @secret_num.to_i.eql? @guessed_num.to_i
  end

end
