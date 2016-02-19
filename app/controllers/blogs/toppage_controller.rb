class Blogs::ToppageController < ApplicationController

  def index
    @posts = Post.all
    @most_views = Post.order('view DESC').first(8)
    @newest_views = Post.order('created_at DESC').first(4)
    @categories = Category.all.order('id')
    @category = Category.first
    # @source = Nokogiri::HTML(@post.body)
    # @img = @source.css('img').map{ |i| i['src'] }.first
  end

end
