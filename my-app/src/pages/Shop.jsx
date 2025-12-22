// "use client"

// import { useState, useEffect } from "react"
// import axios from "axios"

// const Shop = () => {
//   const [items, setItems] = useState([])
//   const [form, setForm] = useState({ name: "", quantity: "", price: "" })
//   const [editingId, setEditingId] = useState(null)

//   const fetchItems = async () => {
//     const res = await axios.get("https://monatour-3.onrender.com/api/shop")
//     setItems(res.data)
//   }

//   useEffect(() => {
//     fetchItems()
//   }, [])

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     const formattedForm = {
//       ...form,
//       quantity: Number(form.quantity),
//       price: Number(form.price),
//     }

//     if (editingId) {
//       await axios.put(`https://monatour-3.onrender.com/api/shop/${editingId}`, formattedForm)
//     } else {
//       await axios.post("https://monatour-3.onrender.com/api/shop", formattedForm)
//     }

//     setForm({ name: "", quantity: "", price: "" })
//     setEditingId(null)
//     fetchItems()
//   }

//   const handleEdit = (item) => {
//     setForm({
//       name: item.name,
//       quantity: item.quantity,
//       price: item.price,
//     })
//     setEditingId(item._id)
//   }

//   const handleDelete = async (id) => {
//     if (window.confirm("هل تريد حذف هذا العنصر؟")) {
//       await axios.delete(`https://monatour-3.onrender.com/api/shop/${id}`)
//       fetchItems()
//     }
//   }

//   const totalAmount = items.reduce((sum, item) => sum + item.quantity * item.price, 0).toFixed(2)

//   return (
//     <div
//       className="min-h-screen p-4 sm:p-6 md:p-8"
//       style={{
//         background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//       }}
//     >
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">جرد المحل</h1>
//           <p className="text-white text-opacity-80">إدارة مخزون المحل بكفاءة وسهولة</p>
//         </div>

//         {/* Form */}
//         <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-8">
//           <h2 className="text-xl font-bold text-gray-800 mb-6">إضافة أو تعديل منتج</h2>
//           <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">اسم المنتج</label>
//               <input
//                 type="text"
//                 placeholder="أدخل اسم المنتج"
//                 value={form.name}
//                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//                 className="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-purple-500 transition"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">الكمية</label>
//               <input
//                 type="number"
//                 placeholder="الكمية"
//                 value={form.quantity}
//                 onChange={(e) => setForm({ ...form, quantity: e.target.value })}
//                 className="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-purple-500 transition"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-semibold text-gray-700 mb-2">السعر</label>
//               <input
//                 type="number"
//                 step="0.01"
//                 placeholder="السعر"
//                 value={form.price}
//                 onChange={(e) => setForm({ ...form, price: e.target.value })}
//                 className="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-purple-500 transition"
//                 required
//               />
//             </div>
//           </form>

//           <button
//             type="submit"
//             onClick={handleSubmit}
//             className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-lg transition transform hover:scale-105"
//           >
//             {editingId ? "تحديث المنتج" : "إضافة منتج"}
//           </button>
//         </div>

//         {/* Desktop Table */}
//         <div className="hidden md:block bg-white rounded-lg shadow-lg overflow-hidden">
//           <table className="w-full">
//             <thead>
//               <tr className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
//                 <th className="p-4 text-right font-bold">اسم المنتج</th>
//                 <th className="p-4 text-center font-bold">الكمية</th>
//                 <th className="p-4 text-center font-bold">السعر</th>
//                 <th className="p-4 text-center font-bold">الإجمالي</th>
//                 <th className="p-4 text-center font-bold">إجراءات</th>
//               </tr>
//             </thead>
//             <tbody>
//               {items.map((item, index) => (
//                 <tr
//                   key={item._id}
//                   className={`border-b transition ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-purple-50`}
//                 >
//                   <td className="p-4 text-right font-semibold text-gray-800">{item.name}</td>
//                   <td className="p-4 text-center text-gray-700">{item.quantity}</td>
//                   <td className="p-4 text-center text-gray-700">{Number(item.price).toFixed(2)}</td>
//                   <td className="p-4 text-center font-bold text-purple-600">
//                     {(item.quantity * item.price).toFixed(2)}
//                   </td>
//                   <td className="p-4 text-center flex gap-2 justify-center">
//                     <button
//                       onClick={() => handleEdit(item)}
//                       className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold px-3 py-1 rounded-lg transition"
//                     >
//                       تعديل
//                     </button>
//                     <button
//                       onClick={() => handleDelete(item._id)}
//                       className="bg-red-500 hover:bg-red-600 text-white font-bold px-3 py-1 rounded-lg transition"
//                     >
//                       حذف
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Mobile Cards */}
//         <div className="md:hidden space-y-4">
//           {items.map((item) => (
//             <div key={item._id} className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-purple-500">
//               <div className="mb-3">
//                 <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
//               </div>
//               <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
//                 <div>
//                   <span className="text-gray-600">الكمية:</span>
//                   <p className="font-bold text-gray-800">{item.quantity}</p>
//                 </div>
//                 <div>
//                   <span className="text-gray-600">السعر:</span>
//                   <p className="font-bold text-gray-800">{Number(item.price).toFixed(2)}</p>
//                 </div>
//               </div>
//               <div className="bg-purple-100 rounded p-2 mb-4">
//                 <span className="text-gray-600">الإجمالي: </span>
//                 <span className="font-bold text-purple-600 text-lg">{(item.quantity * item.price).toFixed(2)}</span>
//               </div>
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => handleEdit(item)}
//                   className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 rounded-lg transition"
//                 >
//                   تعديل
//                 </button>
//                 <button
//                   onClick={() => handleDelete(item._id)}
//                   className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-lg transition"
//                 >
//                   حذف
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Total Section */}
//         <div
//           className="mt-8 p-6 rounded-lg shadow-lg"
//           style={{
//             background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 245, 245, 0.95) 100%)",
//             borderLeft: "6px solid #667eea",
//           }}
//         >
// <h3 className="text-lg text-gray-700 mb-2">
//   الإجمالي: {totalAmount.toLocaleString()} د.أ
// </h3>
//           <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//             {totalAmount}
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Shop
"use client"

import { useState, useEffect } from "react"
import axios from "axios"

const Shop = () => {
  const [items, setItems] = useState([])
  const [form, setForm] = useState({ name: "", quantity: "", price: "" })
  const [editingId, setEditingId] = useState(null)

  const fetchItems = async () => {
    const res = await axios.get("https://monatour-ckd4.onrender.com/api/shop")
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
      await axios.put(`https://monatour-ckd4.onrender.com/api/shop/${editingId}`, formattedForm)
    } else {
      await axios.post("https://monatour-ckd4.onrender.com/api/shop", formattedForm)
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
      await axios.delete(`https://monatour-ckd4.onrender.com/api/shop/${id}`)
      fetchItems()
    }
  }

  const totalAmount = items.reduce((sum, item) => sum + item.quantity * item.price, 0)

  return (
    <div
      className="min-h-screen p-4 sm:p-6 md:p-8"
      style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">جرد المحل</h1>
          <p className="text-white text-opacity-80">إدارة مخزون المحل بكفاءة وسهولة</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">إضافة أو تعديل منتج</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">اسم المنتج</label>
              <input
                type="text"
                placeholder="أدخل اسم المنتج"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-purple-500 transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">الكمية</label>
              <input
                type="number"
                placeholder="الكمية"
                value={form.quantity}
                onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                className="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-purple-500 transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">السعر</label>
              <input
                type="number"
                step="0.01"
                placeholder="السعر"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="w-full border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:border-purple-500 transition"
                required
              />
            </div>
          </form>

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-lg transition transform hover:scale-105"
          >
            {editingId ? "تحديث المنتج" : "إضافة منتج"}
          </button>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <th className="p-4 text-right font-bold">اسم المنتج</th>
                <th className="p-4 text-center font-bold">الكمية</th>
                <th className="p-4 text-center font-bold">السعر</th>
                <th className="p-4 text-center font-bold">الإجمالي</th>
                <th className="p-4 text-center font-bold">إجراءات</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr
                  key={item._id}
                  className={`border-b transition ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-purple-50`}
                >
                  <td className="p-4 text-right font-semibold text-gray-800">{item.name}</td>
                  <td className="p-4 text-center text-gray-700">{item.quantity}</td>
                  <td className="p-4 text-center text-gray-700">{Number(item.price).toLocaleString()} د.أ</td>
                  <td className="p-4 text-center font-bold text-purple-600">
                    {(item.quantity * item.price).toLocaleString()} د.أ
                  </td>
                  <td className="p-4 text-center flex gap-2 justify-center">
                    <button
                      onClick={() => handleEdit(item)}
                      className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold px-3 py-1 rounded-lg transition"
                    >
                    ✏️  تعديل
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold px-3 py-1 rounded-lg transition"
                    >
  🗑️                    حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {items.map((item) => (
            <div key={item._id} className="bg-white rounded-lg shadow-lg p-4 border-l-4 border-purple-500">
              <div className="mb-3">
                <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                <div>
                  <span className="text-gray-600">الكمية:</span>
                  <p className="font-bold text-gray-800">{item.quantity}</p>
                </div>
                <div>
                  <span className="text-gray-600">السعر:</span>
                  <p className="font-bold text-gray-800">{Number(item.price).toLocaleString()} د.أ</p>
                </div>
              </div>
              <div className="bg-purple-100 rounded p-2 mb-4">
                <span className="text-gray-600">الإجمالي: </span>
                <span className="font-bold text-purple-600 text-lg">
                  {(item.quantity * item.price).toLocaleString()} د.أ
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(item)}
                  className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 rounded-lg transition"
                >
                 ✏️ تعديل
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded-lg transition"
                >
 🗑️                 حذف
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Total Section */}
        <div
          className="mt-8 p-6 rounded-lg shadow-lg"
          style={{
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 245, 245, 0.95) 100%)",
            borderLeft: "6px solid #667eea",
          }}
        >
          <h3 className="text-lg text-gray-700 mb-2">الإجمالي: {totalAmount.toLocaleString()} د.أ</h3>
          <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {totalAmount.toLocaleString()} د.أ
          </p>
        </div>
      </div>
    </div>
  )
}

export default Shop
