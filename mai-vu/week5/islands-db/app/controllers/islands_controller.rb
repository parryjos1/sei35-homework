class IslandsController < ApplicationController

    # Bypass the automatic form security check done by Rails
    skip_before_action :verify_authenticity_token, raise: false

    # CREATE
    def new
    end

    def create
        Island.create(
            name: params[:name],
            image: params[:image],
            area: params[:area],
            population: params[:population],
            description: params[:description]
        )
        redirect_to islands_path
    end


    # READ
    def index
        @islands = Island.all
    end
    
    def show
        @island = Island.find( params[:id] )
    end


    # UPDATE
    def edit
        @island = Island.find( params[:id] )
    end

    def update
        i = Island.find( params[:id] )
        i.update(
            name: params[:name],
            image: params[:image],
            area: params[:area],
            population: params[:population],
            description: params[:description]
        )
        redirect_to island_path( i.id )
    end


    # DELETE
    def delete
        Island.destroy( params[:id] )
        redirect_to islands_path
    end
    
end