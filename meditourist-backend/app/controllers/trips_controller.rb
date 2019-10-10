class TripsController < ApplicationController
    def index
        byebug
        render :json => Trip.all
    end

    def show
        byebug
        @trip = Trip.find(params[:id])
        render :json => @trip
    end

    def create
        @trip = Trip.new(trip_params)
        @trip.save
        render :json => @trip
    end

    def destroy
        @trip = Trip.find(params[:id])
        @trip.delete
    end



    private

    def trip_params
        params.require(:trip).permit(:procedure, :price, :country, :clinic_name, :clinic_overview, :address)
    end

end
