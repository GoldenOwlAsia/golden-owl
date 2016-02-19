# == Schema Information
#
# Table name: posts
#
#  id          :integer          not null, primary key
#  title       :string
#  body        :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :integer
#  picture     :string
#  view        :integer
#  category_id :integer
#

class Post < ActiveRecord::Base
  belongs_to :user
  belongs_to :category
  has_many :comments, dependent: :destroy
  mount_uploader :picture, PictureUploader
  is_impressionable :column_name => :impressions_count

end
