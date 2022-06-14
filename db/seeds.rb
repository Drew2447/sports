# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Basketball.destroy_all
Player.destroy_all

sun = Basketball.create(team:'Suns', coach:'Fred Flinstone')
utah = Basketball.create(team:'Jazz', coach:'Eddie Mecury')
bul = Basketball.create(team:'Bulls', coach:'Michell Jorden')

sun.players.create(name:'Brooker',position:'small forward')
sun.players.create(name:'Paul',position:'point guard')
sun.players.create(name:'Ayton',position:'center')
sun.players.create(name:'Johnson',position:'power forward')

# Player.create(name:'Brooker',position:'small forward', basketball_id:sun.id)
# Player.create(name:'Paul',position:'point guard', basketball_id:sun.id)
# Player.create(name:'Ayton',position:'center', basketball_id:sun.id)
# Player.create(name:'Johnson',position:'power forward', basketball_id:sun.id)

utah.players.create(name:'Mitchell',position:'point gaurd')
utah.players.create(name:'Gobert',position:'center')
utah.players.create(name:'Hernangomez',position:'power forward')
utah.players.create(name:'Walker',position:'small forward')

bul.players.create(name:'Lavine',position:'small forward')
bul.players.create(name:'DeRozan',position:'power forward')
bul.players.create(name:'Ball',position:'point guard')
bul.players.create(name:'Vucevic',position:'center')

puts Player.all.size