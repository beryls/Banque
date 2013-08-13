class AccountsController < ApplicationController
  def index
    @accounts = Account.all
    respond_to do |format|
      format.html
      format.json { render json: @accounts }
    end
  end

  def new
    @account = Account.new
  end

  def create
    account = Account.create(params[:account])
    @accounts = Account.all
  end
end