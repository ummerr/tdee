class CreateReports < ActiveRecord::Migration
  def change
    create_table :reports do |t|
      t.references :user
      t.string :intake

      t.timestamps
    end
  end
end
