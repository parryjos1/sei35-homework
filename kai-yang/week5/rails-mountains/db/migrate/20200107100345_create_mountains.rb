class CreateMountains < ActiveRecord::Migration[5.2]
  def change
    create_table :mountains do |t|
      t.text :name
      t.integer :height
      t.text :range
      t.text :parent_mountain
      t.integer :first_ascended
      t.text :country
      t.text :image_url
    end
  end
end
