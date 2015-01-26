get '/reports/?' do
  erb :'reports/main'
end

post '/reports' do
  @report = Report.create(params[:report])
  current_user.reports << @report

  @reports

end

get '/reports/all' do
  @reports = current_user.reports
  erb :'reports/all'
end

get '/reports/:id' do |id|
  @report = Report.find(id)
  erb :'reports/show'
end

delete '/reports/:id' do |id|

end
