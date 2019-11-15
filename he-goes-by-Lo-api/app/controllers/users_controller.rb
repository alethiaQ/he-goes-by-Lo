class UsersController < ApplicationController
  def create
  end

  def show
    user = User.find_by(name: params[:name])
    render json: user
  end
end
