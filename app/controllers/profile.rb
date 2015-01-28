get '/profile' do
  if current_user
    erb :'user/profile'
  else

  end

end