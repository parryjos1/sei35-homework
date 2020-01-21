class SecretController < ApplicationController

    def home
    end
    
    def result
        @secret_num = rand 1..10
        @player_num = params[:num].to_i
        @correct = @player_num == @secret_num ? "Correct! Well done!" : "You guess poorly..."
    end

end