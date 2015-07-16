class AddColumnSkypeToTables < ActiveRecord::Migration
  def change
    add_column :tables, :skype, :string
  end
end
