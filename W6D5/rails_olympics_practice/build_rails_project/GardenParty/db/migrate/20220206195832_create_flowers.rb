class CreateFlowers < ActiveRecord::Migration[5.2]
  def change
    create_table :flowers do |t|
      t.string :flower_type
      t.integer :gardener_id, index: true
      t.string :garden_id, index: true
      t.timestamps
    end
  end
end
