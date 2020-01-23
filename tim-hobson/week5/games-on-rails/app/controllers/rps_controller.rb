class RpsController < ApplicationController

  def comp_throw

    choices = [ 'rock', 'paper', 'scissors' ]
    choices.sample

  end

  def ready

  end

  def result

    @comp_throw = comp_throw
    @player_throw = params[:throw]
    if @comp_throw == @player_throw
      @winner = 'NO ONE WINS - TIE!'
    elsif @player_throw == 'rock' && @comp_throw == 'scissors'
      @winner = 'YOU WIN!'
    elsif @player_throw == 'scissor' && @comp_throw == 'paper'
      @winner = 'YOU WIN!'
    elsif @player_throw == 'paper' && @comp_throw == 'rock'
      @winner = 'YOU WIN!'
    else
      @winner = 'COMPUTER WINS!'
    end

  end

end
