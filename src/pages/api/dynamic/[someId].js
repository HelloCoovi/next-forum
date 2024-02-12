export default async function handler(req, res) {
  console.log(req.query.someId)
  console.log('다이나믹 API 호출!')
  return res.status(200).json()
}