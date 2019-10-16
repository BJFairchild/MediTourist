class TripsController < ApplicationController
    def index
        byebug
        render :json => Trip.all
    end

    def show
        @trip = Trip.find(params[:id])
        render :json => @trip
    end

    def create
        @trip = Trip.new(trip_params)
        @trip.save
        render :json => @trip
    end

    def getTrips
        @user = User.find(params[:user_id])
        @trips = @user.trips
        render :json => @trips
    end

    def destroy
        @trip = Trip.find(params[:id])
        @trip.delete
        @user = User.find(params[:user_id])
        @trips = @user.trips
        render :json => @trips
    end



    private

    def trip_params
        params.require(:trip).permit(:procedure, :price, :country, :clinic_name, :clinic_overview, :address, :user_id, :savings)
    end

end
