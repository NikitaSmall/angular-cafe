class RoomsController < ApplicationController
  def all
    @rooms = Room.all
  end

  def show
    @room = Room.find params[:id]
  end

  def save_rooms

  end
end
