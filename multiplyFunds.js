// Simula multiplicação de saldo
export default function handler(req, res) {
  if (req.method === "POST") {
    const { userId, currentBalance, multiplier } = req.body;
    const newBalance = currentBalance * multiplier;
    res.status(200).json({ newBalance });
  } else {
    res.status(405).json({ message: "Método não permitido" });
  }
}
