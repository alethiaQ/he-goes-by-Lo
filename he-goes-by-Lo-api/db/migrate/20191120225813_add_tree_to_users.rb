class AddTreeToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :trees, :integer
  end
end
