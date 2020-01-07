class MagicController < ApplicationController

    def home
    end

    def question
    end

    def answer

        replies = [
            "It is decidedly so.",
            "Yes! Definitely!",
            "Most likely, I think.",
            "Yes.",
            "Don't count on it.",
            "No.",
            "Highly doubtful.",
            "Cannot predict. Ask again later."
        ]

        question = params[:question]
        if question.end_with? '?'
            @answer = replies.sample
        else
            @answer = "Please ask a valid question."
        end
    end
end