class Api::PlayersController < ApplicationController
  before_action :set_basketball, except: [:all_players]
  before_action :set_player, only: [:show, :update, :destroy]

  def all_players
    render json: Player.all
  end
 
  def index
      render json: @basketball.players.all
  end

  def show
      render json: @player
  end
 
  def create
      @player = @basketball.players.new(players_params)
      if(@player.save)
          render json: @player
      else
          render json: @basketball.errors.full_message, status: 422
      end
  end
 
  def update
      if(@player.update(players_params))
          render json: @player
      else
          render json: @basketball.errors.full_message, status: 422
      end
  end
 
  def destroy
      render json: @player.destroy
  end

  private
  
  def players_params
    params.require(:player).permit(:name, :position)
  end

  def set_basketball
    @basketball = Basketball.find(params[:basketball_id])
  end

  def set_player
      @player = @basketball.players.find(params[:id])
  end
end