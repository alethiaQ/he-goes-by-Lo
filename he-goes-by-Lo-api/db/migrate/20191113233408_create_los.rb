class CreateLos < ActiveRecord::Migration[6.0]
  def change
    create_table :los do |t|
      t.string :picture
      t.references :user, null: false, foreign_key: true
      t.integer :trees

      t.timestamps
    end
  end
end
