class CreateApplications < ActiveRecord::Migration[5.1]
  def change
    create_table :applications do |t|
      t.string :stage, null: false
      t.datetime :created_at, null: false
    end
  end
end
