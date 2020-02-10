class FlightsController < ApplicationController
  def index
    render json: Flight.all, include: [:airplane, reservations: {include: :user} ]
  end

  def show
    # render flight by ID, include reservations, include airplane rows & cols
    render json: Flight.find(params[:id]), include: [:airplane => {only: [:cols, :rows]}, reservations: { include: [:user => { only: [:name, :id] } ], except: [:created_at, :updated_at] }  ],
    except: [:created_at, :updated_at]
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
