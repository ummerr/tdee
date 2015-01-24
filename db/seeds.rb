10.times do
  faker = User.new(name: Faker::Name.name, password: '123', password: '123', email: Faker::Internet.email, birthday: '1986/01/01')
  2.times do
    report = Report.create(intake: Faker::Number.number(4))
    faker.reports << report
  end
  faker.save
end

