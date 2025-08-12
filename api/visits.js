// api/visits.js
let visits = 0;

export default function handler(req, res) {
  visits++;
  res.status(200).json({ visits });
}
