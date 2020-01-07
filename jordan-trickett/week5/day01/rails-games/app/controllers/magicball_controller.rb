
class MagicballController < ApplicationController


    def form

    end

    def answer

        random_word = [
            "Don't count on it.",
            "My reply is no.",
            "My sources say no.",
            "Outlook not so good.",
            "Very doubtful.",
            "As I see it, yes.",
            "Most likely.",
            "Outlook good.",
            "Yes.",
            "Signs point to yes."
          ]

        @answer = random_word.sample

    end


end
