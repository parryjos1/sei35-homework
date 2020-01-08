class RpsController< ApplicationController
  def index
  end

  def show
    @user_answer = params[:answer]
    @user = @user_answer[0]
    auto_ans = ['rock', 'paper', 'scissors']
    @rand_answer = auto_ans[rand 0..2]
    @rand_ans = @rand_answer[0]
  end
end
