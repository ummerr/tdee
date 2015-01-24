class Report < ActiveRecord::Base
  before_save :calculate_intake
  belongs_to :user

  def date_posted
    self.created_at.strftime("%D %R %Z")
  end

  private
    def calculate_intake
      if self.gender.downcase == 'male'
        self.intake = (10 * self.weight.to_i) + (6.25 * self.height.to_i) - (5 * self.age.to_i) + 5
      else
        self.intake = (10 * self.weight.to_i) + (6.25 * self.height.to_i) - (5 * self.age.to_i) - 161
      end
    end
end






