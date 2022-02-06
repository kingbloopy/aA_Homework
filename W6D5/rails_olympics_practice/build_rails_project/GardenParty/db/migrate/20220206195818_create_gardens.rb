class CreateGardens < ActiveRecord::Migration[5.2]
  def change
    create_table :gardens do |t|
      t.string :name
      t.integer :size
      t.integer :garden_owner_id, index: true
      t.timestamps
    end
    add_index :gardens, [:name, :garden_owner_id], unique: true
  end
end
