class ReservationsController < ApplicationController
  def book
    user = User.new user_parm
    if user.save
      Reservation.update user_id: user.id, row: params[:row], col: params[:col] # book_parms, user
    end
  end

  private

  def book_params
    params.require(:reservations).permit(:row, :col)
  end

  def user_param
    params.require(:users).permit(:name)
  end
end
