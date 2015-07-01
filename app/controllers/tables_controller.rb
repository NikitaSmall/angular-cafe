class TablesController < ApplicationController
  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }

  def index
  end

  def all
    @tables = Table.all
  end

  def save_tables
    Table.set_tables params[:tables]

    success = true
    respond_to do |format|
      format.json { render json: success.to_json }
    end
  end
end
