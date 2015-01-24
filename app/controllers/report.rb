get '/reports/?' do
  erb :'reports/main'
end

post '/reports' do
  @report = Report.create(params[:report])
  current_user.reports << @report
  redirect '/reports'
end

get '/reports/all' do

end

get '/reports/:id' do |id|

end

delete '/reports/:id' do |id|

end
