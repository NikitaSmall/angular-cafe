class AddColumnVerticalToTables < ActiveRecord::Migration
  def change
    add_column :tables, :vertical, :boolean
  end
end
