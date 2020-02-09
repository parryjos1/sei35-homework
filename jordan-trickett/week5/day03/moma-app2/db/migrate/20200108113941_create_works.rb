class CreateWorks < ActiveRecord::Migration[5.2]
  def change
    create_table :works do |t|
      t.text :title
      t.date :year
      t.text :medium
      t.text :style
      t.text :image
      t.integer :artist_id

      t.timestamps
    end
  end
end
