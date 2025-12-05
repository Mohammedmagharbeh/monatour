
import React, { useState, useEffect } from "react";
import axios from "axios";

const Warehouses = () => {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: "", quantity: "", price: "" });
  const [editingId, setEditingId] = useState(null);

  // ✅ جلب عناصر المستودع الثاني
  const fetchItems = async () => {
    const res =axios.get("https://monatour-3.onrender.com/api/warehouse2")

    setItems(res.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // ✅ إضافة / تعديل في المستودع الثاني
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingId) {
      await axios.put(
        `http://localhost:5000/api/warehouse2/${editingId}`,
        form
      );
    } else {
axios.post("https://monatour-3.onrender.com/api/warehouse2", form)
    }

    setForm({ name: "", quantity: "", price: "" });
    setEditingId(null);
    fetchItems();
  };

  const handleEdit = (item) => {
    setForm({
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    });
    setEditingId(item._id);
  };

  // ✅ حذف من المستودع الثاني
  const handleDelete = async (id) => {
axios.delete(`https://monatour-3.onrender.com/api/warehouse2/${id}`)
    fetchItems();
  };

  // ✅ حساب المجموع الكلي للمستودع الثاني
  const totalAmount = items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">جرد المستودع الثاني</h1>

      <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded mb-6">
        <input
          type="text"
          placeholder="اسم المنتج"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 rounded w-full mb-2"
          required
        />

        <input
          type="number"
          placeholder="الكمية"
          value={form.quantity}
          onChange={(e) => setForm({ ...form, quantity: e.target.value })}
          className="border p-2 rounded w-full mb-2"
          required
        />

        <input
          type="number"
          placeholder="السعر"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          className="border p-2 rounded w-full mb-2"
          required
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          {editingId ? "تحديث" : "إضافة"}
        </button>
      </form>

      <table className="w-full text-right border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">اسم المنتج</th>
            <th className="border p-2">الكمية</th>
            <th className="border p-2">السعر</th>
            <th className="border p-2">الإجمالي</th>
            <th className="border p-2">إجراءات</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">{item.quantity}</td>
              <td className="border p-2">{item.price}</td>

              ✅ {/* الإجمالي لكل منتج */}
              <td className="border p-2 font-bold text-green-600">
                {item.quantity * item.price}
              </td>

              <td className="border p-2">
                <button
                  onClick={() => handleEdit(item)}
                  className="bg-yellow-400 px-2 py-1 rounded mr-2"
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

      ✅ {/* المجموع الكلي لكل المستودع الثاني */}
      <div className="mt-4 text-xl font-bold text-right text-blue-600">
        المجموع الكلي للمستودع الثاني: {totalAmount}
      </div>
    </div>
  );
};

export default Warehouses;
