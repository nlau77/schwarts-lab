class Api::V1::PastmembersController < ApiController

def index
  @past_members = Pastmember.all
  render json: @past_members
end

end
