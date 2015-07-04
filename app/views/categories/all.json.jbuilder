json.array! @categories do |category|
  json.id category.id
  json.name category.name
  json.products category.products do |product|
    json.extract! product, :id, :name, :price
  end
end