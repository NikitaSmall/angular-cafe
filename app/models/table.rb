class Table < ActiveRecord::Base
  validates :name, :x, :y, presence: true

  def self.set_tables(tables)
    delete_all

    tables.each do |table|
      t = new(name: table[:name], x: table[:x], y: table[:y])
      t.save
    end
  end
end
