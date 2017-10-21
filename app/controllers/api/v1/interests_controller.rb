class Api::V1::InterestsController < ApiController

 def index
   @interests = Interest.all

   render json: {
     interests: @interests
   }
 end
 private
 

end
