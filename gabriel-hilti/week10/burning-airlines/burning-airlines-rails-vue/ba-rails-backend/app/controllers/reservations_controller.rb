class ReservationsController < ApplicationController
  skip_before_action :verify_authenticity_token  # post request without form

  def create
    res = Reservation.create(
      row: params[:row],
      col: params[:col],
      user_id: params[:user_id],  # DON'T DO THIS! Use current_user
      flight_id: params[:flight_id]
    )

    if res.persisted?
      # Send back the reservation object that was successfully created
      render json: res
    else
      # Send back an error hash, including the ActiveRecord validation error messages
      render json: { error: true, messages: res.errors.full_messages }
    end
  end  # create
end
