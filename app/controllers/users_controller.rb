class UsersController < ApplicationController

  def index
    @users = User.all
  end
  def update
    if params[:user][:password].blank?
      params[:user].delete(:password)
      params[:user].delete(:password_confirmation)
    end
  end
  def show
    @user = User.find(params[:id])
  end
end