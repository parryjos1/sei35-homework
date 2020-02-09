class CreateJordans < ActiveRecord::Migration[5.2]
  def change
    create_table :jordans do |t|

      t.string :name
      t.integer :year
      t.string :designer
      t.decimal :price
      t.text :image

    end
  end
end
