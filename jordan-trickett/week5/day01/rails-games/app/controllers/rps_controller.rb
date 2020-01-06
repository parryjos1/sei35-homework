
class RpsController < ApplicationController

  def input
  end

  def result

    @users_weapon = params[:throw]

    @armoury = ['rock', 'paper', 'scissors']

    @comp_weapon = @armoury.sample

    # rock beats scissors
    # paper beats rock
    # scissors beats paper

    win_combos =[
      ['rock', 'scissors'],
      ['paper', 'rock'],
      ['scissors', 'paper']
    ]

    @result = ''

    win_combos.each do | el |
      if @comp_weapon == el[0] && @users_weapon == el[1]
        @result = 'Comp Wins'
      elsif @comp_weapon == @users_weapon
        @result = 'Draw'
      else
        @result = 'User Wins'
      end
    end


    # binding.pry
    # if user has array[0][0] and comp has array[1]
    #   user wins


  end


end
