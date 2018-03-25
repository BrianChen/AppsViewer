# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

stages = ['initial', 'processing', 'approved', 'closed']


100.times do
  Application.create({
    stage: stages.sample,
    created_at: (Date.today + rand(0..24).hour + rand(0..60).minutes).to_datetime
  })
end
