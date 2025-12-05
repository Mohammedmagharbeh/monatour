// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Debt = () => {
//   const [debts, setDebts] = useState([]);
//   const [form, setForm] = useState({
//     name: "",
//     type: "",
//     amount: "",
//     date: "",
//   });
//   const [editingId, setEditingId] = useState(null);

//   const fetchDebts = async () => {
//     const res = axios.get("https://monatour-3.onrender.com/api/debt");

//     setDebts(res.data);
//   };

//   useEffect(() => {
//     fetchDebts();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (editingId) {
//       axios.put(`https://monatour-3.onrender.com/api/debt/${editingId}`, form);
//     } else {
//       axios.post("https://monatour-3.onrender.com/api/debt", form);
//     }
//     setForm({ name: "", type: "credit", amount: 0, date: "" });
//     setEditingId(null);
//     fetchDebts();
//   };

//   const handleEdit = (item) => {
//     setForm({
//       name: item.name,
//       type: item.type,
//       amount: item.amount,
//       date: item.date.split("T")[0],
//     });
//     setEditingId(item._id);
//   };

//   const handleDelete = async (id) => {
// axios.delete(`https://monatour-3.onrender.com/api/debt/${id}`)
//     fetchDebts();
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">الدائن والمدين</h1>

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-4 shadow rounded mb-6"
//       >
//         <input
//           type="text"
//           placeholder="اسم الطرف"
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           className="border p-2 rounded w-full mb-2"
//           required
//         />

//         <select
//           value={form.type}
//           onChange={(e) => setForm({ ...form, type: e.target.value })}
//           className="border p-2 rounded w-full mb-2"
//         >
//           <option value="credit">دائن</option>
//           <option value="debit">مدين</option>
//         </select>

//         <input
//           type="number"
//           placeholder="المبلغ"
//           value={form.amount}
//           onChange={(e) => setForm({ ...form, amount: e.target.value })}
//           className="border p-2 rounded w-full mb-2"
//           required
//         />

//         <input
//           type="date"
//           placeholder="التاريخ"
//           value={form.date}
//           onChange={(e) => setForm({ ...form, date: e.target.value })}
//           className="border p-2 rounded w-full mb-2"
//           required
//         />

//         <button className="bg-green-500 text-white px-4 py-2 rounded">
//           {editingId ? "تحديث" : "إضافة"}
//         </button>
//       </form>

//       <table className="w-full text-right border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="border p-2">الاسم</th>
//             <th className="border p-2">الدائن/المدين</th>
//             <th className="border p-2">المبلغ</th>
//             <th className="border p-2">التاريخ</th>
//             <th className="border p-2">إجراءات</th>
//           </tr>
//         </thead>
//         <tbody>
//           {debts.map((d) => (
//             <tr key={d._id}>
//               <td className="border p-2">{d.name}</td>
//               <td className="border p-2">
//                 {d.type === "credit" ? "دائن" : "مدين"}
//               </td>
//               <td className="border p-2">{d.amount}</td>
//               <td className="border p-2">
//                 {new Date(d.date).toLocaleDateString()}
//               </td>
//               <td className="border p-2 flex gap-2">
//                 <button
//                   onClick={() => handleEdit(d)}
//                   className="bg-yellow-400 px-2 py-1 rounded"
//                 >
//                   تعديل
//                 </button>
//                 <button
//                   onClick={() => handleDelete(d._id)}
//                   className="bg-red-500 text-white px-2 py-1 rounded"
//                 >
//                   حذف
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Debt;


import React, { useState, useEffect } from "react";
import axios from "axios";

const Debt = () => {
  const [debts, setDebts] = useState([]);
  const [form, setForm] = useState({ name: "", type: "credit", amount: 0, date: "" });
  const [editingId, setEditingId] = useState(null);

  const fetchDebts = async () => {
    try {
      const res = await axios.get("https://monatour-3.onrender.com/api/debt");
      setDebts(res.data || []);
    } catch (err) {
      console.error(err);
      setDebts([]);
    }
  };

  useEffect(() => {
    fetchDebts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(
          `https://monatour-3.onrender.com/api/debt/${editingId}`,
          form
        );
      } else {
        await axios.post("https://monatour-3.onrender.com/api/debt", form);
      }
      setForm({ name: "", type: "credit", amount: 0, date: "" });
      setEditingId(null);
      fetchDebts();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (item) => {
    setForm({
      name: item.name,
      type: item.type,
      amount: item.amount,
      date: item.date ? item.date.split("T")[0] : "",
    });
    setEditingId(item._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://monatour-3.onrender.com/api/debt/${id}`);
      fetchDebts();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">الدائن والمدين</h1>

      <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded mb-6">
        <input
          type="text"
          placeholder="اسم الطرف"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 rounded w-full mb-2"
          required
        />

        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          className="border p-2 rounded w-full mb-2"
        >
          <option value="credit">دائن</option>
          <option value="debit">مدين</option>
        </select>

        <input
          type="number"
          placeholder="المبلغ"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          className="border p-2 rounded w-full mb-2"
          required
        />

        <input
          type="date"
          placeholder="التاريخ"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="border p-2 rounded w-full mb-2"
          required
        />

        <button className="bg-green-500 text-white px-4 py-2 rounded">
          {editingId ? "تحديث" : "إضافة"}
        </button>
      </form>

      <table className="w-full text-right border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">الاسم</th>
            <th className="border p-2">نوع الدين</th>
            <th className="border p-2">المبلغ</th>
            <th className="border p-2">التاريخ</th>
            <th className="border p-2">إجراءات</th>
          </tr>
        </thead>
        <tbody>
          {(debts || []).map((item) => (
            <tr key={item._id}>
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">{item.type}</td>
              <td className="border p-2 font-bold text-red-600">{item.amount}</td>
              <td className="border p-2">{item.date ? item.date.split("T")[0] : ""}</td>
              <td className="border p-2 flex gap-2">
                <button
                  onClick={() => handleEdit(item)}
                  className="bg-yellow-400 px-2 py-1 rounded"
                >
                  تعديل
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
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
  );
};

export default Debt;
