"use client"

import { useState, useEffect } from "react"
import axios from "axios"

const Warehouses = () => {
  const [items, setItems] = useState([])
  const [form, setForm] = useState({ name: "", quantity: "", price: "" })
  const [editingId, setEditingId] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchItems = async () => {
    setLoading(true)
    try {
      const res = await axios.get("https://monatour-ckd4.onrender.com/api/warehouse2")
      setItems(res.data)
    } catch (error) {
      console.error("خطأ في جلب البيانات:", error)
    } finally {
      setLoading(false)
    }
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

    try {
      if (editingId) {
        await axios.put(`https://monatour-ckd4.onrender.com/api/warehouse2/${editingId}`, formattedForm)
      } else {
        await axios.post("https://monatour-ckd4.onrender.com/api/warehouse2", formattedForm)
      }

      setForm({ name: "", quantity: "", price: "" })
      setEditingId(null)
      fetchItems()
    } catch (error) {
      console.error("خطأ في حفظ البيانات:", error)
    }
  }

  const handleEdit = (item) => {
    setForm({
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    })
    setEditingId(item._id)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleDelete = async (id) => {
    if (window.confirm("هل تريد حذف هذا العنصر؟")) {
      try {
        await axios.delete(`https://monatour-ckd4.onrender.com/api/warehouse2/${id}`)
        fetchItems()
      } catch (error) {
        console.error("خطأ في حذف العنصر:", error)
      }
    }
  }

  const totalAmount = items.reduce((sum, item) => sum + item.quantity * item.price, 0).toFixed(2)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">🏭 جرد المستودع الثانوي</h1>
          <p className="text-gray-600 text-sm sm:text-base">إدارة وتتبع المنتجات والمخزون</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8 border-l-4 border-blue-500">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            {editingId ? "✏️ تعديل المنتج" : "➕ إضافة منتج جديد"}
          </h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-4"
          >
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">اسم المنتج</label>
              <input
                type="text"
                placeholder="أدخل اسم المنتج"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border-2 border-gray-300 focus:border-blue-500 focus:outline-none p-3 rounded-lg transition duration-200"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">الكمية</label>
              <input
                type="number"
                placeholder="أدخل الكمية"
                value={form.quantity}
                onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                className="w-full border-2 border-gray-300 focus:border-blue-500 focus:outline-none p-3 rounded-lg transition duration-200"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">السعر</label>
              <input
                type="number"
                step="0.01"
                placeholder="أدخل السعر"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="w-full border-2 border-gray-300 focus:border-blue-500 focus:outline-none p-3 rounded-lg transition duration-200"
                required
              />
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-md"
              >
                {editingId ? "تحديث" : "إضافة"}
              </button>
            </div>
          </form>
        </div>

        {/* Items Display */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">جاري تحميل البيانات...</p>
          </div>
        ) : (
          <>
            {/* Desktop Table View */}
            <div className="hidden md:block bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                      <th className="px-6 py-4 text-right font-semibold">اسم المنتج</th>
                      <th className="px-6 py-4 text-center font-semibold">الكمية</th>
                      <th className="px-6 py-4 text-center font-semibold">السعر</th>
                      <th className="px-6 py-4 text-center font-semibold">الإجمالي</th>
                      <th className="px-6 py-4 text-center font-semibold">الإجراءات</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {items.map((item, index) => (
                      <tr
                        key={item._id}
                        className={`${
                          index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        } hover:bg-blue-50 transition duration-200`}
                      >
                        <td className="px-6 py-4 font-medium text-gray-900">{item.name}</td>
                        <td className="px-6 py-4 text-center text-gray-700">{item.quantity}</td>
                        <td className="px-6 py-4 text-center text-gray-700">{Number(item.price).toFixed(2)} د.أ</td>
                        <td className="px-6 py-4 text-center font-bold text-green-600">
                          {(item.quantity * item.price).toFixed(2)} د.أ
                        </td>
                        <td className="px-6 py-4 text-center flex justify-center gap-2">
                          <button
                            onClick={() => handleEdit(item)}
                            className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-4 py-2 rounded-lg transition duration-200 transform hover:scale-105"
                          >
                            ✏️ تعديل
                          </button>
                          <button
                            onClick={() => handleDelete(item._id)}
                            className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded-lg transition duration-200 transform hover:scale-105"
                          >
                            🗑️ حذف
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Cards View */}
            <div className="md:hidden space-y-4 mb-8">
              {items.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-xl shadow-md p-4 border-r-4 border-blue-500 hover:shadow-lg transition duration-200"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                  </div>
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">الكمية:</span>
                      <span className="font-semibold text-gray-900">{item.quantity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">السعر:</span>
                      <span className="font-semibold text-gray-900">{Number(item.price).toFixed(2)}د</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="text-gray-600 font-semibold">الإجمالي:</span>
                      <span className="font-bold text-green-600">{(item.quantity * item.price).toFixed(2)} د.أ</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(item)}
                      className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 rounded-lg transition duration-200"
                    >
                      ✏️ تعديل
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-lg transition duration-200"
                    >
                      🗑️ حذف
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Amount Card */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow-lg p-6 sm:p-8 text-white">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="text-lg sm:text-xl font-semibold">📊 المجموع الكلي للمستودع الثاني:</span>
                <span className="text-2xl sm:text-3xl font-bold">{totalAmount}د.أ</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Warehouses
