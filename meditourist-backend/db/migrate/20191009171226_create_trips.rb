class CreateTrips < ActiveRecord::Migration[5.2]
  def change
    create_table :trips do |t|
      t.string :procedure
      t.integer :price
      t.string :country
      t.string :clinic_name
      t.string :clinic_overview
      t.string :address
      t.integer :user_id
      t.integer :savings
      t.string :flag_url
      t.string :destination_city


      t.timestamps
    end
  end
end
