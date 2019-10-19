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

  def getFlights
    search_term = (params[:city].parameterize) + '+' + (params[:country].parameterize)
    response = RestClient.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/USA/USD/en-US/?query=#{search_term}", headers={'x-rapidapi-host' => 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com', 'x-rapidapi-key' => 'ec39913906mshf4648972b6e832fp1b2936jsn6105500e65f5'})
    response = JSON.parse(response)

    airport_code = (response["Places"][0]["PlaceId"]).split('-')[0]
    now = (Time.now + 2.days).to_s.slice(0..9).split('-')
    month0 = now[1].sub('10', 'OCT').sub('11', 'NOV').sub('12', 'DEC').sub('1', 'JAN').sub('2', 'FEB').sub('3', 'MAR').sub('4', 'APR').sub('5', 'MAY').sub('6', 'JUN').sub('7', 'JUL').sub('8', 'AUG').sub('9', 'SEP')
    in_ten_days = (Time.now + 12.days).to_s.slice(0..9).split('-')
    month1 = in_ten_days[1].sub('10', 'OCT').sub('11', 'NOV').sub('12', 'DEC').sub('1', 'JAN').sub('2', 'FEB').sub('3', 'MAR').sub('4', 'APR').sub('5', 'MAY').sub('6', 'JUN').sub('7', 'JUL').sub('8', 'AUG').sub('9', 'SEP')
    
    date0 = month0 + " " + now[2] + " " + now[0]
    date1 = month1 + " " + in_ten_days[2] + " " + in_ten_days[0]
    
    response = RestClient.get("https://apidojo-hipmunk-v1.p.rapidapi.com/flights/create-session?country=US&pax=1&cabin=Coach&date0=#{date0}&date1=#{date1}&from0=SEA&to0=#{airport_code}&from1=#{airport_code}&to1=SEA", headers={'x-rapidapi-host' => 'apidojo-hipmunk-v1.p.rapidapi.com', 'x-rapidapi-key' => 'ec39913906mshf4648972b6e832fp1b2936jsn6105500e65f5'})
    response = JSON.parse(response)
    key_array = response["itins"].keys
    flight_array = []
    key_array.each do |item|
      flight = {
        key: item,
        price: response["itins"][item]["price"].to_i,
        booking_url: response["itins"][item]["booking_urls"].keys.first
      }
      flight_array << flight
    end

    sorted_flights = flight_array.sort do |priceA, priceB|
      priceA[:price] <=> priceB[:price]
    end
    cheapest_flight = sorted_flights.first

    response = RestClient.get("https://apidojo-hipmunk-v1.p.rapidapi.com/flights/book?country=US&pax=1&cabin=Coach&date0=#{date0}}&date1=#{date1}&from0=SEA&to0=#{airport_code}&from1=#{airport_code}&to1=SEA&itin=#{cheapest_flight[:key]}&booking_url=#{cheapest_flight[:booking_url]}", headers={'x-rapidapi-host' => 'apidojo-hipmunk-v1.p.rapidapi.com', 'x-rapidapi-key' => 'ec39913906mshf4648972b6e832fp1b2936jsn6105500e65f5'})
    response = JSON.parse(response)
    airlines_keys_array = response["airlines"].keys
    airlines = []
    airlines_keys_array.each do |item|
      airlines << response["airlines"][item]["name"]
    end
    url = response["itins"][cheapest_flight[:key]]["booking_urls"][cheapest_flight[:booking_url]]["url"]

    byebug

  


  end
    
    
end