class Basketball < ApplicationRecord
  has_many :players, dependent: :destroy
end
