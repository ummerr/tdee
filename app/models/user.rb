class User < ActiveRecord::Base
  has_secure_password
  has_many :reports
  has_many :goals
end
