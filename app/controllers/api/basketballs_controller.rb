class Api::BasketballsController < ApplicationController
  before_action :set_basketball, only: [:show, :update, :destroy]

  def everything
    render json: {players: Player.all, basketball: Basketball.all}
  end

  def index
    render json: Basketball.all
  end

  def show
      render json: {basketball: @basketball, players: @basketball.players}
  end

  def create
      @basketball = Basketball.new(basketball_params)
      if(@basketball.save)
          render json: @basketball
      else
          render json: @basketball.errors.full_message, status: 422
      end
  end

  def update
      if(@basketball.update(basketball_params))
          render json: @basketball
      else
          render json: @basketball.errors.full_message, status: 422
      end
  end

  def destroy
      render json: @basketball.destroy
  end


  private

  def set_basketball
    @basketball = Basketball.find(params[:id])
  end

  def basketball_params
    params.require(:basketball).permit(:team, :coach)
  end

end
