class Option < ActiveRecord::Base
  def self.set_value(name, value)
    option = where(name: name).first_or_create
    option.value = value

    option.save
  end
end
