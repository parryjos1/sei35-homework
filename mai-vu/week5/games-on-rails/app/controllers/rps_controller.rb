class RpsController < ApplicationController

    def home
    end

    def result
        rules = {
            'rock' => { 'rock' => 'draw', 'paper' => 'loss', 'scissors' => 'win' },
            'paper' => { 'rock' => 'win', 'paper' => 'draw', 'scissors' => 'loss' },
            'scissors' => { 'rock' => 'loss', 'paper' => 'win', 'scissors' => 'draw' }
        }
        @player_throw = params[:throw]
        @computer_throw = ['rock', 'paper', 'scissors'].sample
        @result = rules[@player_throw][@computer_throw]
    end
    
end