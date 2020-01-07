class CreateMountains < ActiveRecord::Migration[5.2]
  def change
    create_table :mountains do |t|
      t.string "name"
      t.integer "height"
      t.text "image"
      t.string "first"
      t.string "date"
    end
  end
end
