class CreateSuperheros < ActiveRecord::Migration[5.2]
  def change
    create_table :superheros do |t|
      t.string :name
      t.string :alterego
      t.string :home
      t.string :publisher
      t.text :bio
      t.string :image

      t.timestamps
    end
  end
end
