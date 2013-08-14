class Account < ActiveRecord::Base
  has_many :transactions
  attr_accessible :name, :balance
  # paginates_per 10
end