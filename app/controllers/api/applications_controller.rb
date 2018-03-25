class Api::ApplicationsController < ApplicationController
  def index
    @applications = Application.all

    render :index
  end
end
