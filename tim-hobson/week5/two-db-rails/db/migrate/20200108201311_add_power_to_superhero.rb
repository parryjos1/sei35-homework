class AddPowerToSuperhero < ActiveRecord::Migration[5.2]
  def change
    add_column :superheros, :power, :string
  end
end
