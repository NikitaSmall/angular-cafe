class AddColumnInscriptionToTables < ActiveRecord::Migration
  def change
    add_column :tables, :inscription, :string
  end
end
