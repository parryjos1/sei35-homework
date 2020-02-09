class CreateSigns < ActiveRecord::Migration[5.2]
  def change
    create_table :signs do |t|

    t.string :name
    t.integer :luckynumber
    
    end
  end
end
