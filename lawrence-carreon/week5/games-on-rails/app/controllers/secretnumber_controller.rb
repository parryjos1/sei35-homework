class SecretnumberController < ApplicationController
    def home
    end
    def played
        @user_guess = params[:guess].to_i
        @magic_number = rand(1..10)
        @correct = @user_guess == @magic_number ? "You guessed... Wisely!" : "You guessed... poorly..."
    end
end