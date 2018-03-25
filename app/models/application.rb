class Application < ApplicationRecord
  enum stage: [:initial, :processing, :approved, :closed]

  validates :stage, inclusion: { in: Application.stages.keys }
end
