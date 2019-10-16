# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u1 = User.create({username: 'Eve', password: 'test'})
u2 = User.create({username: 'Abel', password: 'test'})
u3 = User.create({username: 'Cain', password: 'test'})
u4 = User.create({username: 'Bob', password: 'test'})
