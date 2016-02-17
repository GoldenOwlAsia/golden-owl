# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  post_id    :integer
#  content    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#

require 'rails_helper'

RSpec.describe "Comments", type: :request do
  describe "GET /comments" do
    it "works! (now write some real specs)" do
      get comments_path
      expect(response).to have_http_status(200)
    end
  end
end
