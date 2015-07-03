class RoomsController < ApplicationController
  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }

  def all
    @rooms = Room.all
  end

  def show
    @room = Room.find params[:id]
  end

  def create
    success = Room.create_by_name params[:name]

    respond_to do |format|
      format.json { render json: success.to_json }
    end
  end

  def destroy
    success = Room.delete params[:id]

    respond_to do |format|
      format.json { render json: success.to_json }
    end
  end
end
