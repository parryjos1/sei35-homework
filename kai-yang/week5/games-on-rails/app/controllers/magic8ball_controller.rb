class Magic8ballController < ApplicationController
  def ask_questions
  end

  def answer_questions
    @questions = params[:questions]
    answers_array = ['It is certain', 'As I see it, yes.', 'Reply hazy, try again', 'Do not count on it.', 'It is decidedly so.', 'Most likely', 'Ask again later.', 'My reply is no.', 'Without a douby.', 'Outlook good.', 'Better not tell you now.', 'My sources say no.', 'Yes - definitely', 'Yes.', 'Cannot predict now.', 'Outlook not so good.', 'You may rely on it.', 'Sings point to yes.', 'Concentrate and ask again.', 'Very doubtful.']
    @answer = answers_array[rand 0..answers_array.length]
    # binding.pry
  end
end
