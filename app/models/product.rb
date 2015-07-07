class Product < ActiveRecord::Base
  belongs_to :category
  has_many :line_items, dependent: :destroy

  validates :name, :price, presence: true
  validates :name, uniqueness: true

  validates :price, numericality: { greater_than_or_equal_to: 0 }

  def self.create_from_json(name, price, category_id)
    success = false

    unless name.blank? || price.blank? || category_id.blank?
      product = create(name: name, price: price, category_id: category_id)
      success = product.id
    end
    success
  end
end
