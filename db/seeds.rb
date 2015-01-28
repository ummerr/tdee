5.times do
  User.create(name: Faker::Name.name, password: 'password', password: 'password', email: Faker::Internet.email, gender: ['male','female'].sample)
end
