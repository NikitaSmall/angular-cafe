json.id @order.id
json.note @order.note
json.price @order.price
json.status @order.status
json.created_at @order.created_at

json.line_items @order.line_items do |line_item|
  json.id line_item.id
  json.order_id line_item.order.id
  json.product_id line_item.product.id
  json.count line_item.count
  json.price line_item.price
  json.name line_item.product.name
end