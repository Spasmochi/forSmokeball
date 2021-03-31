const { httpGet } = require('./mock-http-interface');

const statusMap = {
  200: "Arnie Quote",
  500: "FAILURE"
}

const getArnieQuotes = async (urls) => {
  try {
    const promises = urls.map(httpGet)
    const results = await Promise.all(promises)
    return results.map(res => ({
      [statusMap[res.status]]: JSON.parse(res.body).message
    }))
  } catch (error) {
    console.log(error)
  }
};

module.exports = {
  getArnieQuotes,
};
