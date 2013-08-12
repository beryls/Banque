class CreateAccountsTable < ActiveRecord::Migration
  def up
    create_table :accounts do |t|
      t.string :name
      t.decimal :balance, :scale => 2 , :default => 0
      t.timestamps
    end
  end

  def down
    drop_table :accounts
  end
end
