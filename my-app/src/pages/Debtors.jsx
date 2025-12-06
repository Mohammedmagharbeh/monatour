// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Debtors = () => {
//   const [debtors, setDebtors] = useState([]);

//   const fetchDebtors = async () => {
//     const res = await axios.get("https://monatour-3.onrender.com/api/debt");
//     // فلترة المدينين فقط
//     setDebtors(res.data.filter(item => item.type === "debit"));
//   };

//   useEffect(() => {
//     fetchDebtors();
//   }, []);

//   return (
//     <div className="max-w-5xl mx-auto p-4 sm:p-6">
//       <h1 className="text-2xl sm:text-3xl font-bold mb-4">المدينين</h1>
//       <div className="overflow-x-auto">
//         <table className="w-full text-right border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border p-2">الاسم</th>
//               <th className="border p-2">المبلغ</th>
//               <th className="border p-2">التاريخ</th>
//             </tr>
//           </thead>
//           <tbody>
//             {debtors.map(d => (
//               <tr key={d._id}>
//                 <td className="border p-2">{d.name}</td>
//                 <td className="border p-2">{d.amount}</td>
//                 <td className="border p-2">{new Date(d.date).toLocaleDateString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Debtors;
import React, { useState, useEffect } from "react";
import axios from "axios";

const Debtors = () => {
  const [debtors, setDebtors] = useState([]);
  const [form, setForm] = useState({ name: "", amount: "", date: "" });
  const [editingId, setEditingId] = useState(null);

  const fetchDebtors = async () => {
    const res = await axios.get("https://monatour-3.onrender.com/api/debt");
    setDebtors(res.data.filter(item => item.type === "debit"));
  };

  useEffect(() => {
    fetchDebtors();
  }, []);

  const totalAmount = debtors.reduce((sum, item) => sum + Number(item.amount), 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`https://monatour-3.onrender.com/api/debt/${editingId}`, {
        ...form,
        type: "debit"
      });
    } else {
      await axios.post("https://monatour-3.onrender.com/api/debt", {
        ...form,
        type: "debit"
      });
    }
    setForm({ name: "", amount: "", date: "" });
    setEditingId(null);
    fetchDebtors();
  };

  const handleEdit = (item) => {
    setForm({
      name: item.name,
      amount: item.amount,
      date: item.date.split("T")[0]
    });
    setEditingId(item._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("هل تريد حذف هذا العنصر؟")) {
      await axios.delete(`https://monatour-3.onrender.com/api/debt/${id}`);
      fetchDebtors();
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4">المدينين</h1>
      <p className="mb-4 font-semibold">المجموع الكلي للمدينين: {totalAmount}</p>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 sm:p-6 shadow rounded mb-6 flex flex-col sm:flex-row sm:items-end gap-4"
      >
        <input
          type="text"
          placeholder="اسم الطرف"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 rounded w-full sm:w-1/3"
          required
        />

        <input
          type="number"
          placeholder="المبلغ"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          className="border p-2 rounded w-full sm:w-1/3"
          required
        />

        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="border p-2 rounded w-full sm:w-1/3"
          required
        />

        <button className="bg-green-500 text-white px-4 py-2 rounded w-full sm:w-auto">
          {editingId ? "تحديث" : "إضافة"}
        </button>
      </form>

      <div className="overflow-x-auto">
        <table className="w-full text-right border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">الاسم</th>
              <th className="border p-2">المبلغ</th>
              <th className="border p-2">التاريخ</th>
              <th className="border p-2">إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {debtors.map((d) => (
              <tr key={d._id}>
                <td className="border p-2">{d.name}</td>
                <td className="border p-2">{d.amount}</td>
                <td className="border p-2">{new Date(d.date).toLocaleDateString()}</td>
                <td className="border p-2 flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => handleEdit(d)}
                    className="bg-yellow-400 px-2 py-1 rounded"
                  >
                    تعديل
                  </button>
                  <button
                    onClick={() => handleDelete(d._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Debtors;
