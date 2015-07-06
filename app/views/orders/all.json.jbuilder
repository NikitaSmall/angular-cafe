json.array! @orders do |order|
  json.extract! order, :id, :note, :price, :status, :created_at
end