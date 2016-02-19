# == Schema Information
#
# Table name: categories
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  name       :string
#

class Category < ActiveRecord::Base
  has_many :posts
  def to_param # Note that this will override the [:id] parameter in routes.rb.
    name
  end
end
