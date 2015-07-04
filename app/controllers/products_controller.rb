class ProductsController < ApplicationController
  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }

  def create
    success = Product.create_from_json params[:name], params[:price], params[:category_id]

    respond_to do |format|
      format.json { render json: {success: success} }
    end
  end

  def destroy
    success = Product.destroy params[:id]

    respond_to do |format|
      format.json { render json: success.to_json }
    end
  end
end
