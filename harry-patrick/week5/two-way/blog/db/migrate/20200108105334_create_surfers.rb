class CreateSurfers < ActiveRecord::Migration[5.2]
  def change
    create_table :surfers do |t|
      t.string :name
      t.integer :gnar
      t.string :stance
      t.references :wave, foreign_key: true

      t.timestamps
    end
  end
end
