class RpsController < ApplicationController
    def player_choice
    end
    def play_game
        rules = {
            "rock" => {"rock" => "draw", "paper" => "loss", "scissors" => "win"},
            "scissors" => {"rock" => "loss", "paper" => "win", "scissors" => "draw"},
            "paper" => {"rock" => "win", "paper" => "draw", "scissors" => "loss"}
        }
        cpu_choices = ["rock","paper","scissors"]
        @cpu_choice = cpu_choices.sample
        @user_choice = params[:throw]
        @result = rules[@user_choice][@cpu_choice]
    end
end