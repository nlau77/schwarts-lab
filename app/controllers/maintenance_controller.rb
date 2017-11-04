class MaintenanceController < ApplicationController

  def index
    if !current_user.present?
      redirect_to root_path
    end
  end

  def show

  end
end
