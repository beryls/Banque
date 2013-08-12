class CreateTransactionsTable < ActiveRecord::Migration
  def up
    create_table :transactions do |t|
      t.string :type
      t.decimal :amount, :scale => 2
      t.string :memo
      t.timestamps
    end
  end

  def down
    drop_table :transactions
  end
end
