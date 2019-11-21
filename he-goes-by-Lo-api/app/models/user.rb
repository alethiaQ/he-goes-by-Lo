class User < ApplicationRecord
  validates :email, uniqueness: true

  #   def self.top_three_scores
  #     self.all(:order => "trees DESC")
  #   end

end
