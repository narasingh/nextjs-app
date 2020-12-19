export default (req, res) => {
  res.statusCode = 200;
  res.status(200).json({ text: 'Hello' })
}
