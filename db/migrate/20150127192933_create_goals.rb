class CreateGoals < ActiveRecord::Migration
  def change
    create_table :reports do |t|
      t.references :user
      t.string :goal_weight

      t.timestamps
    end
  end
end
