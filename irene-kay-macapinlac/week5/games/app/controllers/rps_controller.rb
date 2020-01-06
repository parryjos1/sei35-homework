class RpsController < ApplicationController

  def play_hand

    game_hands = [
      "rock",
      "paper",
      "scissors"
    ]

    game_logic = [
      "rock" > "scissors",
      "scissors" > "paper",
      "paper" > "rock"
    ]

    # Use params[:throw] as a user's choice
    @p1_hand = params[:hand]
    @ai_hand = game_hands.sample #need to code a way that this hand can't choose p1's hand

    @result = 



    binding.pry


  end


end
