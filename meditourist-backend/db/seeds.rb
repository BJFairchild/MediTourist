# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

u1 = User.create({username: 'Eve', password: 'test', budget: 0})
u2 = User.create({username: 'Abel', password: 'test', budget: 0})
u3 = User.create({username: 'Cain', password: 'test', budget: 0})
u4 = User.create({username: 'Bob', password: 'test', budget: 0})
print 'Users Created'

t1 = Trip.create({procedure: "facelift", price: 1800, country: "Hungary", clinic_name: "Clinic Awesome", clinic_overview: "It's awesome, duh.", address: "123 B St", user_id: 1})
t2 = Trip.create({procedure: "facelift", price: 1800, country: "Hungary", clinic_name: "Clinic Awesome", clinic_overview: "It's awesome, duh.", address: "123 B St", user_id: 2})
t3 = Trip.create({procedure: "facelift", price: 1800, country: "Hungary", clinic_name: "Clinic Awesome", clinic_overview: "It's awesome, duh.", address: "123 B St", user_id: 3})
t4 = Trip.create({procedure: "facelift", price: 1800, country: "Hungary", clinic_name: "Clinic Awesome", clinic_overview: "It's awesome, duh.", address: "123 B St", user_id: 4})
print 'Trips Created'

u1.trips << t1
u2.trips << t2
u3.trips << t3
u4.trips << t4
print 'Added trips to users'