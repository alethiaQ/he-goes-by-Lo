class User < ApplicationRecord
  validates :email, uniqueness: true

  #   def self.top_three_scores
  #     self.all(:order => "trees DESC")
  #   end
  def self.topThreeTrees
    # out of all users in table order them by trees amount
    return User.all.order("trees DESC").limit(3)
  end
end
