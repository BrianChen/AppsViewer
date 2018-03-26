require 'rake'
require 'database_cleaner'

Rake::Task.clear
AppsViewer::Application.load_tasks

class Api::ApplicationsController < ApplicationController
  def index
    @applications = Application.all

    render :index
  end

  def reload
    Rake::Task['db:seed'].reenable

    DatabaseCleaner.strategy = :truncation
    DatabaseCleaner.clean

    Rake::Task['db:seed'].invoke

    index
  end
end
