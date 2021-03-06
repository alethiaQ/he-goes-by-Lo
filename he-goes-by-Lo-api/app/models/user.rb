class User < ApplicationRecord
  validates :email, uniqueness: true
  has_many :games

  #   def self.top_three_scores
  #     self.all(:order => "trees DESC")
  #   end
  # def self.topThreeTrees
  #   # out of all users in table order them by trees amount
  #   return User.games.all.order("trees DESC").limit(3)
  # end

  def sort_games
    games.order(:score).limit(5)
  end
end
