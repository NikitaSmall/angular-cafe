class CreateLineItems < ActiveRecord::Migration
  def change
    create_table :line_items do |t|
      t.belongs_to :product, index: true, foreign_key: true
      t.belongs_to :order, index: true, foreign_key: true
      t.float :price
      t.integer :count

      t.timestamps null: false
    end
  end
end
