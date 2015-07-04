class Category < ActiveRecord::Base
  has_many :products, dependent: :destroy

  validates :name, presence: true

  def self.create_by_name(name)
    success = false

    unless name.blank?
      category = create(name: name)
      success = category.id
    end
    success
  end
end
