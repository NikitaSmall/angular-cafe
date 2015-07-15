class TablesController < ApplicationController
  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }

  def all
    @tables = Table.all
  end

  def show
    @tables = Table.where room: params[:id]
  end

  def create
    table = Table.create x: params[:x], y: params[:y], room_id: params[:room]

    respond_to do |format|
      format.json { render json: table.to_json }
    end
  end

  def update
    table = Table.find params[:id]

    table.name = params[:name]
    table.inscription = params[:inscription]
    table.description = params[:description]

    table.save

    success = true
    respond_to do |format|
      format.json { render json: success.to_json }
    end
  end

  def destroy
    Table.destroy params[:id]

    success = true
    respond_to do |format|
      format.json { render json: success.to_json }
    end
  end

  def save_tables
    Table.set_tables params[:room], params[:tables]

    success = true
    respond_to do |format|
      format.json { render json: success.to_json }
    end
  end
end
