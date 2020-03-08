class FlightsController < ApplicationController
  def index
    render json: Flight.all, include: [:airplane, reservations: {include: :user} ]
  end

  def show
    # render flight by ID, include reservations, include airplane rows & cols

    # Create a hash whose keys look like 'row:col' with a value of true for
    # each booked seat
    # reservations = ...
    flight = Flight.find(params[:id])

    reservations_lookup = {}
    user_reservations_lookup = {}

    fake_current_user_id = 13  # use current_user in a real system with working auth

    flight.reservations.each do |res|
      if res.user_id == fake_current_user_id
        user_reservations_lookup["#{res.row}-#{res.col}"] = 1
      else
        reservations_lookup["#{res.row}-#{res.col}"] = 1
      end
    end

    render json: {
      flight: flight,
      reservations: reservations_lookup,
      user_reservations: user_reservations_lookup
    },
      include: {
        airplane: { only: [:name, :rows, :cols]}
    }

    # render json: {:flight => flight.as_json( :except => [:created_at]), :seat => @seat }


    # render json: { :flight =>  Flight.find(params[:id]).as_json( include: [:airplane => {only: [:cols, :rows]}, reservations: { include: [:user => { only: [:name, :id] } ], except: [:created_at, :updated_at] }],
    # except: [:created_at, :updated_at]), :seat => @seat }
  end

  def search
    results = Flight.where(
      origin: params[:origin],
      destination: params[:destination]
    )

    render json: results, include: {airplane: { only: [:name] } },
    except: [ :created_at, :updated_at ]
  end
end
