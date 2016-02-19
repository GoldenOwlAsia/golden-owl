class AddViewToPost < ActiveRecord::Migration
  def change
    add_column :posts, :view, :integer, default: 0
  end
end
