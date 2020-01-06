class MagicconchController < ApplicationController
    def home
    end
    def user_response
        @user_question = params[:question].gsub("-"," ")
        responses = [
            "Maybe someday.",
            "Nothing.",
            "Neither.",
            "Follow the seahorse.",
            "I don't think so.",
            "No.",
            "Yes.",
            "Try asking again."
        ]
        @magic_response = responses.sample
    end
end