class OptionsController < ApplicationController
  protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }

  def all
    @options = Option.all
  end

  def show
    @option = Option.where(name: params[:name]).first
  end

  def set_options
    success = Option.set_value params[:name], params[:value]

    respond_to do |format|
      format.json { render json: success.to_json }
    end
  end
end
