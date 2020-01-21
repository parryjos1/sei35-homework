class CreateWaves < ActiveRecord::Migration[5.2]
  def change
    create_table :waves do |t|
      t.string :name
      t.string :country
      t.string :size
      t.string :image

      t.timestamps
    end
  end
end
