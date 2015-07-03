class AddRoomIdToTables < ActiveRecord::Migration
  def change
    add_reference :tables, :room_id, index: true
    add_foreign_key :tables, :rooms
  end
end
