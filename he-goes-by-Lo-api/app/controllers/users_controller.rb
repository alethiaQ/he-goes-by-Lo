class UsersController < ApplicationController
  before_action :set_user, only: %i[show update destroy]

  def index
    topThreeUsers = User.topThreeTrees
    users = User.all
    render json: users
  end

  def show
    render json: user
  end

  def create
    user = User.find_or_create_by(email: params[:email])
    if user
      user.name = params[:name]

      render json: user
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
    params.require(:user).permit(:name, :email, :trees)
  end

  def set_user
    user = User.find(params[:id])
  end
end
