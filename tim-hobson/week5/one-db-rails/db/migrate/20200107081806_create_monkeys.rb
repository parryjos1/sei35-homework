class CreateMonkeys < ActiveRecord::Migration[5.2]
  def change
    create_table :monkeys do |t|
      t.string :name
      t.string :native_country
      t.float :weight
      t.float :height
      t.integer :lifespan
      t.string :image
    end
  end
end
