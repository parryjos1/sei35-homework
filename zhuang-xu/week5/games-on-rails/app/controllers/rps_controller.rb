class RpsController < ApplicationController
  def form
    @choices = {'rock' => 'scissors', 'paper' => 'rock', 'scissors' => 'paper'}

    @result = nil

    @player_choice = params[:player]
    if @player_choice != nil
      @computer_choice = @choices[@choices.keys[rand(0..2)]]
      if @choices[@player_choice] == @computer_choice
        @result = 'Player wins'
      elsif @player_choice == @computer_choice
        @result = 'It\'s a draw'
      else
        @result = 'Computer wins'
      end
    end
    @result
  end
end
