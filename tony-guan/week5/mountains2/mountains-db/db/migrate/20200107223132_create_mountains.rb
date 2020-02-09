class CreateMountains < ActiveRecord::Migration[5.2]
  def change
    create_table :mountains do |t|

      t.string :name
      t.text :image
      t.integer :height
      t.text :description

    end

  end
end
