class ScrapeController < ApplicationController

    def get_country_choices
        @test = Mechanize.new
        @test.user_agent_alias = 'Mac Safari'
        @test.request_headers = {"Accept-Encoding" => ""}
        @test.ignore_bad_chunking = true
        @test.follow_meta_refresh = true

        page = @test.get("https://www.medigo.com/en-us/plastic-and-cosmetic-surgery/#{procedure}?sort=best_match&lang_filter=en")
