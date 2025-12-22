"use client"

import { useState, useEffect } from "react"
import axios from "axios"

const Warehouse = () => {
  const [items, setItems] = useState([])
  const [form, setForm] = useState({ name: "", quantity: "", price: "" })
  const [editingId, setEditingId] = useState(null)

  const fetchItems = async () => {
    const res = await axios.get("https://monatour-ckd4.onrender.com/api/warehouse")
    setItems(res.data)
  }

  useEffect(() => {
    fetchItems()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formattedForm = {
      ...form,
      quantity: Number(form.quantity),
      price: Number(form.price),
    }

    if (editingId) {
      await axios.put(`https://monatour-ckd4.onrender.com/api/warehouse/${editingId}`, formattedForm)
    } else {
      await axios.post("https://monatour-ckd4.onrender.com/api/warehouse", formattedForm)
    }

    setForm({ name: "", quantity: "", price: "" })
    setEditingId(null)
    fetchItems()
  }

  const handleEdit = (item) => {
    setForm({
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    })
    setEditingId(item._id)
  }

  const handleDelete = async (id) => {
    if (window.confirm("هل تريد حذف هذا العنصر؟")) {
      await axios.delete(`https://monatour-ckd4.onrender.com/api/warehouse/${id}`)
      fetchItems()
    }
  }

  const totalAmount = items.reduce((sum, item) => sum + item.quantity * item.price, 0).toFixed(2)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 mb-2">
            جرد المستودع الرئيسي🏭
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-teal-500 rounded"></div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-blue-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-right">
            {editingId ? "تحديث المنتج" : "إضافة منتج جديد"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="sm:col-span-2 lg:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2 text-right">اسم المنتج</label>
              <input
                type="text"
                placeholder="أدخل اسم المنتج"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                required
              />
            </div>

            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2 text-right">الكمية</label>
              <input
                type="number"
                placeholder="0"
                value={form.quantity}
                onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                required
              />
            </div>

            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2 text-right">السعر</label>
              <input
                type="number"
                step="0.01"
                placeholder="0.00"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
                required
              />
            </div>

            <div className="sm:col-span-2 lg:col-span-1 flex items-end">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                {editingId ? "تحديث" : "إضافة"}
              </button>
            </div>
          </div>
        </form>

        <div className="hidden lg:block bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
          <table className="w-full text-right">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-teal-600 text-white">
                <th className="p-4 font-semibold">اسم المنتج</th>
                <th className="p-4 font-semibold">الكمية</th>
                <th className="p-4 font-semibold">السعر</th>
                <th className="p-4 font-semibold">الإجمالي</th>
                <th className="p-4 font-semibold">إجراءات</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr
                  key={item._id}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-blue-50"
                  } border-b border-gray-200 hover:bg-blue-100 transition-colors duration-150`}
                >
                  <td className="p-4">{item.name}</td>
                  <td className="p-4 text-center">{item.quantity}</td>
                  <td className="p-4">{Number(item.price).toFixed(2)}</td>
                  <td className="p-4 font-bold text-green-600">{(item.quantity * item.price).toFixed(2)}</td>
                  <td className="p-4 flex gap-2 justify-center">
                    <button
                      onClick={() => handleEdit(item)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-1 rounded-lg text-sm font-semibold transition-colors duration-150"
                    >
                     ✏️ تعديل
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm font-semibold transition-colors duration-150"
                    >
 🗑️                     حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-lg p-4 border border-blue-100 hover:shadow-xl transition-shadow duration-200"
            >
              <h3 className="text-lg font-bold text-gray-800 text-right mb-3">{item.name}</h3>
              <div className="space-y-2 mb-4 text-right">
                <div className="flex justify-between">
                  <span className="text-gray-600">الكمية:</span>
                  <span className="font-semibold">{item.quantity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">السعر:</span>
                  <span className="font-semibold">{Number(item.price).toFixed(2)}</span>
                </div>
                <div className="flex justify-between bg-green-50 p-2 rounded">
                  <span className="text-gray-700 font-semibold">الإجمالي:</span>
                  <span className="text-green-600 font-bold">{(item.quantity * item.price).toFixed(2)}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(item)}
                  className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded-lg font-semibold transition-colors duration-150"
                >
                 ✏️ تعديل
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition-colors duration-150"
                >
 🗑️                 حذف
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl shadow-lg p-6 text-right">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div>
              <p className="text-sm opacity-90">إجمالي عدد المنتجات</p>
              <p className="text-2xl sm:text-3xl font-bold">{items.length}</p>
            </div>
            <div className="text-right">
              <p className="text-sm opacity-90">المجموع الكلي للمستودع</p>
              <p className="text-3xl sm:text-4xl font-bold">{totalAmount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Warehouse
