class Table < ActiveRecord::Base
  belongs_to :room
  validates :name, :x, :y, presence: true

  def self.set_tables(room, tables)
    delete_all(room: room)

    if tables
      tables.each do |table|
        t = new(name: table[:name], x: table[:x], y: table[:y], room_id: table[:room])
        t.save
      end
    end
  end
end
