class CreateProfiles < ActiveRecord::Migration[5.1]
  def change
    create_table :profiles do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.string :img_url, null: false
      t.boolean :past_member

      t.timestamps null: false
    end
  end
end
