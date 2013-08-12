class AccountsController < ApplicationController
  def index
    accounts = Account.all
    respond_to do |format|
      format.html
      format.json { render json: accounts.to_json }
    end
  end

  def create
    account = Account.create(name: params[:name])
    respond_to do |format|
      format.json { render json: task.to_json }
    end
  end
end