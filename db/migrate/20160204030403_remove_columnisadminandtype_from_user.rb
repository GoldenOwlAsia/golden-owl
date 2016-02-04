class RemoveColumnisadminandtypeFromUser < ActiveRecord::Migration
  def change
    remove_column :users, :isadmin, :boolean
    remove_column :users, :type, :integer
  end
end
