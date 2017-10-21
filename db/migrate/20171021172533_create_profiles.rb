class CreateProfiles < ActiveRecord::Migration[5.1]
  def change
    create_table :profiles do |t|
      t.text :description, null: false
      t.string :img_url, null: false

      t.timestamps null: false
    end
  end
end
