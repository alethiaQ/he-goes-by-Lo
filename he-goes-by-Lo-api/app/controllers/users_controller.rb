class UsersController < ApplicationController
    def create

    end 

    def show 
        user = User.find_by(name: params[:name])
        if user && user.authenticate(params[:password])
            render json: user 
        end 
    end
end
