class User < ApplicationRecord
  has_many :reservations
  has_many :flights, through: :reservations
  has_secure_password
end
