require 'mechanize'

class ScrapeController < ApplicationController

    def getCountryChoices
        @test = Mechanize.new
        @test.user_agent_alias = 'Mac Safari'
        @test.request_headers = {"Accept-Encoding" => ""}
        @test.ignore_bad_chunking = true
        @test.follow_meta_refresh = true

        page = @test.get("https://www.medigo.com/en-us/plastic-and-cosmetic-surgery/#{params[:procedure]}?sort=best_match&lang_filter=en")

        country_values_array = []
        country_names = []
        
        country_value_items = page.search('ul#country-filters li.field input.country-checkbox')
        country_name_items = page.search('ul#country-filters li.field a')
        country_value_items.each do |item|
            country_values_array << item.attr('value')
        end
    
        country_name_items.each do |item|
            country_names << item.text.strip
        end

        country_values = country_values_array[1..-1]

        @results = {values: country_values, names: country_names}

        render :json => @results
    end

    def getClinics
        @test = Mechanize.new
        @test.user_agent_alias = 'Mac Safari'
        @test.request_headers = {"Accept-Encoding" => ""}
        @test.ignore_bad_chunking = true
        @test.follow_meta_refresh = true

        page = @test.get("https://www.medigo.com/en-us/plastic-and-cosmetic-surgery/#{params[:procedure]}/all/#{params[:country]}?sort=price&lang_filter=en")

        clinic_location_item = page.search('li.item-list div.clinic-location')
        clinic_locations = []
        clinic_location_item.each do |item|
            clinic_locations << item.text.strip
        end

        clinic_name_item = page.search('li.item-list h3.clinic-name a')
        clinic_names = []
        clinic_names_href = []
        clinic_name_item.each do |link|
            clinic_names << link.text.strip[0..-54].tr("\n","").gsub(/\s+/, ' ')
            clinic_names_href << link['href']
        end
        
        price_item = page.search('span.price em')
        prices_list = []
        price_item.each do |item|
            prices_list << item.text.strip
        end
        prices = prices_list.uniq

        completed_items = []
        count = 0
        while count <= clinic_names.length do
            completed_items << [clinic_names[count] , clinic_names_href[count] , clinic_locations[count] , prices[count]] 
            count += 1
        end
        
        @results = completed_items[0..-2]

        render :json => @results
    end

    def getClinicOverview
        @test = Mechanize.new
        @test.user_agent_alias = 'Mac Safari'
        @test.request_headers = {"Accept-Encoding" => ""}
        @test.ignore_bad_chunking = true
        @test.follow_meta_refresh = true

        page = @test.get("#{params[:searchterm]}")
        
        location = page.search('div#clinic-map p').text.strip

        clinic_overview_item = page.search('div.description-markdown p')
        description = clinic_overview_item.each do |item|
            if item != clinic_overview_item[-1]
              puts ""
              puts item.text
            else
              puts item.text
            end
        end

        descript_array = []
        @results = []
        @results << location
        description.each do |item|
            descript_array << item.text
        end
        @results << descript_array.join("\n")

        render :json => @results
    end


end
