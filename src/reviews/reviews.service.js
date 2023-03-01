const knex = require("../db/connection")

function read(reviewId){
    return knex("reviews")
    .select("*")
    .where({ "review_id":reviewId })
    .first()
}


function getCritic(criticId){
    return knex("critics")
    .select("*")
    .where({"critic_id":criticId})
}

function destroy(reviewId){

    return knex("reviews")
    .where({ "review_id":reviewId })
    .del()
}

function update(updatedReview, id){
    return knex("reviews")
    .select("*")
    .where({ review_id: id })
    .update({...updatedReview} )
  
}

module.exports = {
    read,
    delete: destroy,
    getCritic,
    update,

}
