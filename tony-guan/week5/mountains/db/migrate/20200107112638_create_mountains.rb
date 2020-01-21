class CreateMountains < ActiveRecord::Migration[5.2]

  def change
    create_table :mountains do |t|
       t.text :mountain
       t.text :range
       t.text :image
       t.integer :height
       t.text :description
       t.text :location
    end
  end
end
