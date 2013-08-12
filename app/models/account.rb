class Account < ActiveRecord::Base
  has_many :transactions
  attr_accessible :name, :balance
  attr_accessor :name, :balance
end