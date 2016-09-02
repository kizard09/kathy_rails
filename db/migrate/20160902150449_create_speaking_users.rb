class CreateSpeakingUsers < ActiveRecord::Migration
  def change
    create_table :speaking_users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :event
      t.text :message

      t.timestamps null: false
    end
  end
end
