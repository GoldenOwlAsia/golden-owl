class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :email
      t.text :subject
      t.text :message

      t.timestamps null: false
    end
  end
end
