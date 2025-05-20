// Simula uma API de adição de saldo
export default function handler(req, res) {
  if (req.method === "POST") {
    const { userId, amount } = req.body;
    // Aqui normalmente salvaríamos no banco, por enquanto é simulação
    res.status(200).json({ message: `Adicionado R$ ${amount} para o usuário ${userId}` });
  } else {
    res.status(405).json({ message: "Método não permitido" });
  }
}
