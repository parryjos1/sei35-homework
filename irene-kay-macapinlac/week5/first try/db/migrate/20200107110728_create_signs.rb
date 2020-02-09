class CreateSigns < ActiveRecord::Migration[5.2]
  def change
    create_table :signs do |t|

      t.string :name
      t.string :date
      t.integer :house
      t.string :info

    end
  end
end
