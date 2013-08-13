class Transaction < ActiveRecord::Base
  belongs_to :account
  attr_accessible :type, :amount, :memo
  # paginates_per 20
end