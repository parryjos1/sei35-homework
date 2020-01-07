class CreateMountains < ActiveRecord::Migration[5.2]
  def change
    create_table :mountains do |t|
      t.string :name
      t.float :height
      t.string :country
      t.float :longitude
      t.float :latitude
      t.string :first_ascent_year
      t.string :range
    end
  end
end
