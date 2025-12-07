"use client"

import { useState, useEffect } from "react"
import axios from "axios"

const Debtors = () => {
  const [debtors, setDebtors] = useState([])
  const [form, setForm] = useState({ name: "", amount: "", date: "" })
  const [editingId, setEditingId] = useState(null)

  const fetchDebtors = async () => {
    const res = await axios.get("https://monatour-3.onrender.com/api/debt")
    setDebtors(res.data.filter((item) => item.type === "debit"))
  }

  useEffect(() => {
    fetchDebtors()
  }, [])

  const totalAmount = debtors.reduce((sum, item) => sum + Number(item.amount), 0)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (editingId) {
      await axios.put(`https://monatour-3.onrender.com/api/debt/${editingId}`, {
        ...form,
        type: "debit",
      })
    } else {
      await axios.post("https://monatour-3.onrender.com/api/debt", {
        ...form,
        type: "debit",
      })
    }
    setForm({ name: "", amount: "", date: "" })
    setEditingId(null)
    fetchDebtors()
  }

  const handleEdit = (item) => {
    setForm({
      name: item.name,
      amount: item.amount,
      date: item.date.split("T")[0],
    })
    setEditingId(item._id)
  }

  const handleDelete = async (id) => {
    if (window.confirm("هل تريد حذف هذا العنصر؟")) {
      await axios.delete(`https://monatour-3.onrender.com/api/debt/${id}`)
      fetchDebtors()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">المدينين</h1>
          <p className="text-gray-600 text-sm sm:text-base">إدارة وتتبع المدينين والمبالغ المستحقة</p>
        </div>

        <div className="bg-gradient-to-r from-red-500 to-orange-400 rounded-lg shadow-lg p-6 mb-8 text-white">
          <p className="text-sm sm:text-base opacity-90">المجموع الكلي للمدينين</p>
          <p className="text-3xl sm:text-4xl font-bold mt-2">{totalAmount.toLocaleString()} دينار</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
            {editingId ? "تحديث بيانات المدين" : "إضافة مدين جديد"}
          </h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="lg:col-span-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">اسم الطرف</label>
              <input
                type="text"
                placeholder="أدخل اسم المدين"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border-2 border-gray-200 p-3 rounded-lg focus:outline-none focus:border-blue-500 transition"
                required
              />
            </div>

            <div className="lg:col-span-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">المبلغ</label>
              <input
                type="number"
                placeholder="أدخل المبلغ"
                value={form.amount}
                onChange={(e) => setForm({ ...form, amount: e.target.value })}
                className="w-full border-2 border-gray-200 p-3 rounded-lg focus:outline-none focus:border-blue-500 transition"
                required
              />
            </div>

            <div className="lg:col-span-1">
              <label className="block text-sm font-semibold text-gray-700 mb-2">التاريخ</label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full border-2 border-gray-200 p-3 rounded-lg focus:outline-none focus:border-blue-500 transition"
                required
              />
            </div>

            <div className="lg:col-span-1 flex items-end">
              <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-green-600 hover:to-green-700 transition shadow-md">
                {editingId ? "تحديث" : "إضافة"}
              </button>
            </div>
          </form>
        </div>

        {/* Desktop table view */}
        <div className="hidden sm:block bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full text-right">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <th className="p-4 font-semibold">الاسم</th>
                <th className="p-4 font-semibold">المبلغ</th>
                <th className="p-4 font-semibold">التاريخ</th>
                <th className="p-4 font-semibold">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {debtors.map((d, index) => (
                <tr key={d._id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-gray-100"}>
                  <td className="p-4 border-t border-gray-200 font-medium text-gray-800">{d.name}</td>
                  <td className="p-4 border-t border-gray-200 text-red-600 font-semibold">
                    {Number(d.amount).toLocaleString()} دينار
                  </td>
                  <td className="p-4 border-t border-gray-200 text-gray-600">
                    {new Date(d.date).toLocaleDateString("en-GB")
}
                    
                  </td>
                  <td className="p-4 border-t border-gray-200 flex gap-2">
                    <button
                      onClick={() => handleEdit(d)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold px-3 py-2 rounded-lg transition"
                    >
                      تعديل
                    </button>
                    <button
                      onClick={() => handleDelete(d._id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold px-3 py-2 rounded-lg transition"
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile card view */}
        <div className="sm:hidden space-y-4">
          {debtors.map((d) => (
            <div key={d._id} className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-500">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="font-bold text-gray-800 text-lg">{d.name}</p>
                  <p className="text-sm text-gray-500 mt-1">{new Date(d.date).toLocaleDateString("ar-SA")}</p>
                </div>
                <p className="text-red-600 font-bold text-lg">{Number(d.amount).toLocaleString()} دينار</p>
              </div>
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => handleEdit(d)}
                  className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-2 rounded-lg transition"
                >
                  تعديل
                </button>
                <button
                  onClick={() => handleDelete(d._id)}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition"
                >
                  حذف
                </button>
              </div>
            </div>
          ))}
        </div>

        {debtors.length === 0 && (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <p className="text-gray-500 text-lg">لا توجد سجلات للمدينين</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Debtors
