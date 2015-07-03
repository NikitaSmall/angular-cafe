class Room < ActiveRecord::Base
  validates :name, uniqueness: true
  validates :name, presence: true

  has_many :tables, dependent: :destroy

  

  def self.create_by_name(name)
    success = false

    unless name.blank?
      @room = Room.new(name: name)
      @room.save

      success = @room.id
    end
    success
  end

  def self.update_name(room)
    success = false

    unless room[:name].blank?
      @room = Room.find(room[:id])
      @room.name = room[:name]

      @room.save
      success = @room.id
    end
    success
  end
end
