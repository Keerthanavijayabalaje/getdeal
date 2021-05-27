const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "cbanc.cny7tsngrm4b.us-east-2.rds.amazonaws.com",
  database: "postgres",
  password: "cbanc2021",
  port: 5432
});
const getdeal = (request, response) => {
  pool.query('select A.id, A.opportunityid,A.percentfunded,A.percentcommitted,A.retaining,A.deal_status_id,A.resourcetype,A.created,A.updated from cbanc2.deal A INNER JOIN cbanc2.opportunity B ON A.opportunityid= B.id ', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
module.exports = {
getdeal
}
