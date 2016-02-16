class Blogs::ToppageController < ApplicationController

  def index
    @posts = Post.all
    # @source = Nokogiri::HTML(@post.body)
    # @img = @source.css('img').map{ |i| i['src'] }.first
  end
end
