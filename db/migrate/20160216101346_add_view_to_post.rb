class AddViewToPost < ActiveRecord::Migration
  def change
    add_column :posts, :view, :integer
  end
end
