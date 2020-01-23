class CreateVillains < ActiveRecord::Migration[5.2]
  def change
    create_table :villains do |t|
      t.string :name
      t.string :alterego
      t.string :home
      t.string :publisher
      t.text :bio
      t.string :image
      t.integer :superhero_id

      t.timestamps
    end
  end
end
