class RemoveTypeOfCategory < ActiveRecord::Migration
  def change
    remove_column :categories, :type, :integer
  end
end
