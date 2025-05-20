import { useRouter } from "next/router";
import { useState } from "react";

export default function UserDashboard() {
  const router = useRouter();
  const { id } = router.query;
  const [balance, setBalance] = useState(100.0);
  const [amount, setAmount] = useState("");
  const [multiplier, setMultiplier] = useState(1.1);

  const handleAddFunds = async () => {
    const res = await fetch("/api/addFunds", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: id, amount: parseFloat(amount) }),
    });
    const data = await res.json();
    alert(data.message);
  };

  const handleMultiply = async () => {
    const res = await fetch("/api/multiplyFunds", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: id, currentBalance: balance, multiplier }),
    });
    const data = await res.json();
    setBalance(data.newBalance);
  };

  return (
    <main className="p-8 bg-black text-gold min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Usuário {id}</h1>
      <p>Saldo atual: R$ {balance.toFixed(2)}</p>
      <div className="mt-4">
        <input
          type="number"
          placeholder="Adicionar valor"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="text-black p-2 rounded mr-2"
        />
        <button onClick={handleAddFunds} className="bg-gold text-black p-2 rounded">
          Adicionar saldo
        </button>
      </div>
      <div className="mt-4">
        <label className="block mb-1">Multiplicador:</label>
        <input
          type="number"
          step="0.1"
          value={multiplier}
          onChange={(e) => setMultiplier(parseFloat(e.target.value))}
          className="text-black p-2 rounded mr-2"
        />
        <button onClick={handleMultiply} className="bg-gold text-black p-2 rounded">
          Multiplicar saldo
        </button>
      </div>
    </main>
  );
}
