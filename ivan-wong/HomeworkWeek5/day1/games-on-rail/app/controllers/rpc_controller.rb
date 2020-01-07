class RpcController < ApplicationController
  def throwing
    ai = rand 1..3
    if ai == 1
      @aiMove = "Paper"
    elsif ai == 2
      @aiMove = "Scissors"
    elsif ai == 3
      @aiMove = "Rock"
    end
    @plMove = params[:type]
    if @plMove == @aiMove
      @output = "Draw"
    elsif (@plMove == "Paper" && @aiMove == "Scissors") || (@plMove == "Rock" && @aiMove == "Paper") || (@plMove == "Scissors" && @aiMove == "Rock")
      @output = "Loss"
    else
      @output = "Win"
    end
  end
end
