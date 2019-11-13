class LosController < ApplicationController
    def index 
        los = Lo.all
        render json: los
    end
end
