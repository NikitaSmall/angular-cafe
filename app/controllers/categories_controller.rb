class CategoriesController < ApplicationController
  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }

  def all
    @categories = Category.all
  end

  def create
    success = Category.create_by_name params[:name]

    respond_to do |format|
      format.json { render json: {success: success} }
    end
  end

  def destroy
    success = Category.destroy params[:id]

    respond_to do |format|
      format.json { render json: success.to_json }
    end
  end
end
