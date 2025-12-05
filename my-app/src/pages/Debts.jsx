
import React, { useState, useEffect } from "react";
import axios from "axios";

const Debt = () => {
  const [debts, setDebts] = useState([]);
  const [form, setForm] = useState({ name:"", type:"", amount:"", date:"" });
  const [editingId, setEditingId] = useState(null);

  const fetchDebts = async () => {
    const res = await axios.get("http://localhost:5000/api/debt");
    setDebts(res.data);
  };

  useEffect(() => { fetchDebts(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(editingId){
      await axios.put(`http://localhost:5000/api/debt/${editingId}`, form);
    } else {
      await axios.post("http://localhost:5000/api/debt", form);
    }
    setForm({ name:"", type:"credit", amount:0, date:"" });
    setEditingId(null);
    fetchDebts();
  };

  const handleEdit = (item) => {
    setForm({ name:item.name, type:item.type, amount:item.amount, date:item.date.split("T")[0] });
    setEditingId(item._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/debt/${id}`);
    fetchDebts();
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">الدائن والمدين</h1>

      <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded mb-6">
        <input type="text" placeholder="اسم الطرف" value={form.name} 
          onChange={e => setForm({...form, name:e.target.value})} className="border p-2 rounded w-full mb-2" required />

        <select value={form.type} onChange={e=>setForm({...form,type:e.target.value})} 
          className="border p-2 rounded w-full mb-2">
          <option value="credit">دائن</option>
          <option value="debit">مدين</option>
        </select>

        <input type="number" placeholder="المبلغ" value={form.amount} 
          onChange={e=>setForm({...form,amount:e.target.value})} className="border p-2 rounded w-full mb-2" required />

        <input type="date" placeholder="التاريخ" value={form.date} 
          onChange={e=>setForm({...form,date:e.target.value})} className="border p-2 rounded w-full mb-2" required />

        <button className="bg-green-500 text-white px-4 py-2 rounded">
          {editingId ? "تحديث" : "إضافة"}
        </button>
      </form>

      <table className="w-full text-right border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">الاسم</th>
            <th className="border p-2">الدائن/المدين</th>
            <th className="border p-2">المبلغ</th>
            <th className="border p-2">التاريخ</th>
            <th className="border p-2">إجراءات</th>
          </tr>
        </thead>
        <tbody>
          {debts.map(d => (
            <tr key={d._id}>
              <td className="border p-2">{d.name}</td>
              <td className="border p-2">{d.type === "credit" ? "دائن" : "مدين"}</td>
              <td className="border p-2">{d.amount}</td>
              <td className="border p-2">{new Date(d.date).toLocaleDateString()}</td>
              <td className="border p-2 flex gap-2">
                <button onClick={() => handleEdit(d)} className="bg-yellow-400 px-2 py-1 rounded">تعديل</button>
                <button onClick={() => handleDelete(d._id)} className="bg-red-500 text-white px-2 py-1 rounded">حذف</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Debt;
