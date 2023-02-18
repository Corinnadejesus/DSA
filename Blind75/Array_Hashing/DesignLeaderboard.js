/*
addScore(playerId, score): Update the leaderboard by adding score to the given player's score. If there is no player with such id in the leaderboard, add him to the leaderboard with the given score.

top(K): Return the score sum of the top K players.

reset(playerId): Reset the score of the player with the given id to 0 (in other words erase it from the leaderboard). It is guaranteed that the player was added to the leaderboard before calling this function.
Initially, the leaderboard is empty.

Time: O(n log n) | Space: O(n)
*/

class Leaderboard{
    constructor(){
      this.map = new Map()
    }

    //Time: O(n)
    addScore(playerId, score){
      this.map.set(playerId, (this.map.get(playerId) || 0) + score);
    }

    //Time: O(n log n)
    top(k){
      return [...this.map.values()]
        .sort((a,b)=>b-a)
        .slice(0,k)
        .reduce((a,v)=> a + v,0)
    }

    //Time: O(n)
    reset(playerId){
      this.map.set(playerId, 0)
    }
  }
