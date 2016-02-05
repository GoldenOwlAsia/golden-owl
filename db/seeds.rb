# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
user = User.create! :email => 'admin1@gmail.com', :password => '987654321', :password_confirmation => '987654321', :user_type => 'admin'
user = User.create! :email => 'my.nguyen@gmail.com', :password => '987654321', :password_confirmation => '987654321', :user_type => 'user'
user = User.create! :email => 'thangnguyen@gmail.com', :password => '987654321', :password_confirmation => '987654321', :user_type => 'user'