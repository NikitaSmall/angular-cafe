class OrdersController < ApplicationController
  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }

  def all
    @orders = Order.all
  end

  def show
    @order = Order.find params[:id]
  end

  def create
    order = Order.create status: false, price: 0, note: ''

    respond_to do |format|
      format.json { render json: order.to_json }
    end
  end

  def update
    order = Order.find params[:id]

    order.note = params[:note] unless params[:note].nil?
    order.status = params[:status] unless params[:status].nil?
    order.save

    respond_to do |format|
      format.json { render json: order.to_json }
    end
  end

  def destroy
    success = Order.destroy params[:id]

    respond_to do |format|
      format.json { render json: success.to_json }
    end
  end
end
