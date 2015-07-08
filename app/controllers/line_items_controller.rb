class LineItemsController < ApplicationController
  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }

  def create
    line_item = LineItem.create(product_id: params[:product_id], order_id: params[:order_id], price: params[:price], count: params[:count])

    order = calculate_total_price params[:order_id]

    respond_to do |format|
      format.json { render json: order.to_json }
    end
  end

  def destroy

  end

  def increase_count
    line_item = LineItem.where(order_id: params[:order_id], product_id: params[:product_id]).first

    line_item.count += 1
    line_item.save

    order = calculate_total_price params[:order_id]

    respond_to do |format|
      format.json { render json: order.to_json }
    end
  end

  def decrease_count

  end

  private
  def calculate_total_price(order_id)
    order = Order.find(order_id)

    order.price = 0
    order.line_items.each do |line_item|
      order.price += line_item.price * line_item.count
    end
    order.save

    order
  end
end