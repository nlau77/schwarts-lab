class LabmethodsController < ApplicationController

  def index

  end

  def new

  end
  def create
    # binding.pry
    uploaded_io = params["labmethod"]["pdf_file"]

    File.open(Rails.root.join('public','methods', 'testing',
      uploaded_io.original_filename), 'wb') do |file|
        file.write(uploaded_io.read)
      end
    redirect_to maintenance_index_path

  end
end
