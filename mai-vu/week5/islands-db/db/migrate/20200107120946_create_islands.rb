class CreateIslands < ActiveRecord::Migration[5.2]

  def change

    create_table :islands do |t|
      t.string :name
      t.text :image
      t.float :area
      t.integer :population
      t.text :description
    end
    
  end

end
