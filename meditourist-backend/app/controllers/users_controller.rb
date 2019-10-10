class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def index
        render :json => User.all
    end

    def show
        @user = User.find(params[:id])
        render :json => @user
    end

    def login
        @username = params[:username].downcase
        @user = User.where('lower(username) = ?', @username).first
        render json: @user
    end

    def create
        @user = User.create(user_params)
        if @user.valid?
            @token = encode_token(user_id: @user.id)
            render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
        else
            render json: {error: "Failed to create user."}, status: :not_acceptable
        end
    end



    private

    def user_params
        params.require(:user).permit(:username, :password, :budget)
    end



end
