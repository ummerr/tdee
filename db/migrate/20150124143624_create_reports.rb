class CreateReports < ActiveRecord::Migration
  def change
    create_table :reports do |t|
      t.references :user
      t.string :age
      t.string :weight
      t.string :height

      # t.string :intake BEFORE SAVE METHOD

      t.timestamps
    end
  end
end
