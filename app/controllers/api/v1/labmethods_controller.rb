class Api::V1::LabmethodsController < ApiController

def index
  @labmethods = Labmethod.all
  render json: @labmethods
end

end
