type Game = { name: string, rating: number }

const gameList: Game[] = [
    { name: 'call of duty', rating: 4.0 },
    { name: 'call of duty', rating: 6.0 },
    { name: 'assasin creed', rating: 6.4 },
    { name: 'mario', rating: 10.2 },
]

// 1. returns list of name from list of game
const names = (games: Game[]): string[] => games.map( game => game.name )
console.log(names(gameList))

// 2. returns list of string that has format `<name> [<rating>]`
// eg. `call of duty [7.4]`
const formatGames = (games: Game[]): string[] => games.map( game => `${game.name} [${game.rating}]`)
console.log(formatGames(gameList))

// 3. get sum of all the ratings in list of game
const totalRatingsOf = (games: Game[]): number => games.reduce( (sum , game)  =>  sum + game.rating , 0)
console.log(totalRatingsOf(gameList))

// 4. get average of all the ratings in list of game
const averageRatingsOf = (games: Game[]): number => totalRatingsOf(games) / gameList.length
console.log(averageRatingsOf(gameList))

// 5. get total rating by name from list of game
const totalRatingsByName = (name: string, games: Game[]): number => totalRatingsOf(games.filter( game => game.name === name ))
console.log(totalRatingsByName('call of duty', gameList))

// 6. get average rating by name from list of game
const averageRatingsByName = (name: string, games: Game[]): number => {
    const  gameByName =  games.filter( game => game.name === name )

    return totalRatingsOf(gameByName) / gameByName.length
}
console.log(averageRatingsByName('call of duty', gameList))

// 7. increase rating for all games
const increaseRatingBy = (inc: number, games: Game[]): Game[] =>
    games
        .map(game => {
            const { ...newGame } = game
            newGame.rating = newGame.rating + inc

            return newGame
        })
console.log(increaseRatingBy(9, gameList))

// 8. decrease rating for game with specific name
const decreaseRatingBy = (dec: number, name: string, games: Game[]): Game[] =>
    games
        .filter(game => game.name === name)
        .map(game => {
            const { ...newGame } = game
            newGame.rating = newGame.rating - dec

            return newGame
        })
console.log(decreaseRatingBy(3, 'call of duty', gameList))

// 9. returns game if the name exist else returns undefined
const findByName = (name: string, games: Game[]): Game[] =>{
    const  gameByName = games.filter( game => game.name === name)

    return gameByName.length ? gameByName: undefined
}
console.log(findByName('call of duty', gameList))

// 10. decrease rating for game that has name in the list
const decreaseRatingForNames = (dec: number, names: string[], games: Game[]): Game[] =>
    games.filter( game =>  names.includes(game.name))
        .map( game => {
            const { ...newGame } = game
            newGame.rating = newGame.rating - dec

            return newGame
        })

console.log(decreaseRatingForNames(1, ['call of duty','b'], gameList))
