class AddPowerToVillain < ActiveRecord::Migration[5.2]
  def change
    add_column :villains, :power, :string
  end
end
