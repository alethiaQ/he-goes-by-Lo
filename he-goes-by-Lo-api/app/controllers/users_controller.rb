class UsersController < ApplicationController
  # before_action :set_user, only: %i[show update destroy]

  def index
    # topThreeUsers = User.topThreeTrees
    users = User.all
    render json: users
  end

  def show
    user = set_user
    render json: { id: user.id, name: user.name, email: user.email, games: user.sort_games }
  end

  def create
    user = User.find_or_create_by(email: params[:email])
    if !user.games
      user.games.build(score: 0)
    end
    if user
      user.name = params[:name]
      games = user.sort_games
      render json: { id: user.id, name: user.name, email: user.email, games: user.sort_games }
    else
      render json: user.errors
    end
  end

  def update
    user = User.find_by(id: params[:id])

    if user.update(user_params)
      render json: user
    else
      render json: user.errors
    end
  end

  def destroy
    user.destroy
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :trees, :games)
  end

  def set_user
    user = User.find(params[:id])
  end
end
