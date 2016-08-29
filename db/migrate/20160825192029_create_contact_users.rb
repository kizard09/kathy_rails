class CreateContactUsers < ActiveRecord::Migration
  def change
    create_table :contact_users do |t|
      t.string :name
      t.string :first_name
      t.string :last_name
      t.string :email
      t.text :message

      t.timestamps null: false
    end
  end
end
