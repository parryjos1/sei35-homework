class Magic8Controller < ApplicationController
  def form
  end

  def answer
    @question = params[:question]

    answers = []
    answers << 'I don\'t know. Sorry!'
    answers << 'Who cares?'
    answers << 'Ask your mom.'
    answers << 'Ask Luke.'
    answers << 'Good question. Let me get back to you.'

    @answer = answers[rand(0..answers.length-1)]
  end
end
