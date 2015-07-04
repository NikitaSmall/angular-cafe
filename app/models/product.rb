class Product < ActiveRecord::Base
  belongs_to :category

  validates :name, :price, presence: true

  def self.create_from_json(name, price, category_id)
    success = false

    unless name.blank? || price.blank? || category_id.blank?
      product = create(name: name, price: price, category_id: category_id)
      success = product.id
    end
    success
  end
end
