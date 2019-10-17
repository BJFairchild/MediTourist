class ComsController < ApplicationController
  def getCoords
    search_term = params[:address].parameterize.gsub("-","+")
    string_response = RestClient.get("https://maps.googleapis.com/maps/api/geocode/json?address=#{search_term}&key=#{ENV["GOOGLE_MAPS_API_KEY"]}")
    response_hash = JSON.parse(string_response)
    lat_long_hash = response_hash["results"][0]["geometry"]["location"]
    @results = {
      latlong: lat_long_hash,
    }
    render :json => @results
  end

  def get_api_key
    @api_key = {
      api_key: "#{ENV["GOOGLE_MAPS_API_KEY"]}"
    }
    render :json => @api_key
  end

  def getFlag
    string = params[:country].parameterize
    search_term = string.slice(0..(string.index('-'))).slice(0..-2)
    response = RestClient.get("https://restcountries.eu/rest/v2/name/#{search_term}")
    response = JSON.parse(response)
    @flag = {flag: response[0]["flag"]}
    render :json => @flag
  end
    
end