class Api::V1::ProfilesController < ApiController

def index
  @profiles = Profile.all
  render json: @profiles
end

end
