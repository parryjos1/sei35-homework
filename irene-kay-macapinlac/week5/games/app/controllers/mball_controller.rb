class MballController < ApplicationController

    def answer_to

      answers = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes, definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful"
      ]

      greetings = [
        "Hello dear friend the answer to you question...",
        "Today the answer for you: ",
        "The ball says: "
      ]

      puts greetings.sample
      sleep 1
      puts answers.sample

      @greet = greetings.sample

      @answer = answers.sample

    p params
    puts "#{ params[:query] }???"

    @answer_to_query = params[:query]

    # binding.pry
  end

  end
