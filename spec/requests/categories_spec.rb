# == Schema Information
#
# Table name: categories
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  name       :string
#

require 'rails_helper'

RSpec.describe "Categories", type: :request do
  describe "GET /categories" do
    it "works! (now write some real specs)" do
      get categories_path
      expect(response).to have_http_status(200)
    end
  end
end
