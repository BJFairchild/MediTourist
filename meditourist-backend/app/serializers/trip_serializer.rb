class TripSerializer < ActiveModel::Serializer
  attributes :id, :procedure, :country, :price, :address, :clinic_name, :clinic_overview, :user_id, :savings, :flag_url, :destination_city
end
