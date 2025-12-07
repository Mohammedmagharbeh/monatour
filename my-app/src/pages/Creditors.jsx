// // "use client"

// // import { useState, useEffect } from "react"
// // import axios from "axios"

// // const Creditors = () => {
// //   const [creditors, setCreditors] = useState([])
// //   const [form, setForm] = useState({ name: "", amount: "", date: "" })
// //   const [editingId, setEditingId] = useState(null)

// //   const fetchCreditors = async () => {
// //     const res = await axios.get("https://monatour-3.onrender.com/api/debt")
// //     setCreditors(res.data.filter((item) => item.type === "credit"))
// //   }

// //   useEffect(() => {
// //     fetchCreditors()
// //   }, [])

// //   const totalAmount = creditors.reduce((sum, item) => sum + Number(item.amount), 0)

// //   const handleSubmit = async (e) => {
// //     e.preventDefault()
// //     if (editingId) {
// //       await axios.put(`https://monatour-3.onrender.com/api/debt/${editingId}`, {
// //         ...form,
// //         type: "credit",
// //       })
// //     } else {
// //       await axios.post("https://monatour-3.onrender.com/api/debt", {
// //         ...form,
// //         type: "credit",
// //       })
// //     }
// //     setForm({ name: "", amount: "", date: "" })
// //     setEditingId(null)
// //     fetchCreditors()
// //   }

// //   const handleEdit = (item) => {
// //     setForm({
// //       name: item.name,
// //       amount: item.amount,
// //       date: item.date.split("T")[0],
// //     })
// //     setEditingId(item._id)
// //   }

// //   const handleDelete = async (id) => {
// //     if (window.confirm("هل تريد حذف هذا العنصر؟")) {
// //       await axios.delete(`https://monatour-3.onrender.com/api/debt/${id}`)
// //       fetchCreditors()
// //     }
// //   }

// //   const formatDate = (dateString) => {
// //     return new Date(dateString).toLocaleDateString("en-US", {
// //       year: "numeric",
// //       month: "2-digit",
// //       day: "2-digit",
// //     })
// //   }

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 p-4 sm:p-6">
// //       <div className="max-w-6xl mx-auto">
// //         {/* Header */}
// //         <div className="mb-8">
// //           <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">الدائنين</h1>
// //           <p className="text-gray-600">إدارة حسابات الدائنين والمستحقات</p>
// //         </div>

// //         {/* Total Amount Card */}
// //         <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg p-6 sm:p-8 mb-8 shadow-lg">
// //           <p className="text-sm sm:text-base opacity-90 mb-2">المجموع الكلي للدائنين</p>
// //           <p className="text-3xl sm:text-4xl font-bold">{totalAmount.toLocaleString()} دينار</p>
// //         </div>

// //         {/* Form */}
// //         <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
// //           <h2 className="text-xl font-bold text-gray-800 mb-6">{editingId ? "تعديل الدائن" : "إضافة دائن جديد"}</h2>
// //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            
// //             <input
// //               type="text"
// //               placeholder="اسم الطرف"
// //               value={form.name}
// //               onChange={(e) => setForm({ ...form, name: e.target.value })}
// //               className="border-2 border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:outline-none transition"
// //               required
// //             />

// //             <input
// //               type="number"
// //               placeholder="المبلغ"
// //               value={form.amount}
// //               onChange={(e) => setForm({ ...form, amount: e.target.value })}
// //               className="border-2 border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:outline-none transition"
// //               required
// //             />

// //             <input
// //               type="date"
// //               value={form.date}
// //               onChange={(e) => setForm({ ...form, date: e.target.value })}
// //               className="border-2 border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:outline-none transition"
// //               required
// //             />

          //   <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105">
          //     {editingId ? "تحديث" : "إضافة"}
          //   </button>
          // </div>
// //         </form>

// //         {/* Desktop Table */}
// //         <div className="hidden sm:block bg-white rounded-lg shadow-lg overflow-hidden">
// //           <div className="overflow-x-auto">
// //             <table className="w-full">
// //               <thead>
// //                 <tr className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
// //                   <th className="p-4 text-right">الاسم</th>
// //                   <th className="p-4 text-right">المبلغ</th>
// //                   <th className="p-4 text-right">التاريخ</th>
// //                   <th className="p-4 text-right">إجراءات</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {creditors.map((d, index) => (
// //                   <tr key={d._id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-gray-100"}>
// //                     <td className="p-4 text-gray-800">{d.name}</td>
// //                     <td className="p-4 text-gray-800 font-semibold">{Number(d.amount).toLocaleString()} دينار</td>
// //                     <td className="p-4 text-gray-600">{formatDate(d.date)}</td>
// //                     <td className="p-4 flex gap-2">
// //                       <button
// //                         onClick={() => handleEdit(d)}
// //                         className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-3 py-1 rounded font-semibold transition transform hover:scale-105"
// //                       >
// //                         تعديل
// //                       </button>
// //                       <button
// //                         onClick={() => handleDelete(d._id)}
// //                         className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded font-semibold transition transform hover:scale-105"
// //                       >
// //                         حذف
// //                       </button>
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>

// //         {/* Mobile Cards */}
// //         <div className="sm:hidden space-y-4">
// //           {creditors.map((d) => (
// //             <div key={d._id} className="bg-white rounded-lg shadow-md p-4 border-r-4 border-blue-500">
// //               <div className="mb-3">
                
// //                 <p className="text-gray-600 text-sm">الاسم</p>
// //                 <p className="text-gray-800 font-bold text-lg">{d.name}</p>
// //               </div>
// //               <div className="grid grid-cols-2 gap-3 mb-3">
// //                 <div>
// //                   <p className="text-gray-600 text-sm">المبلغ</p>
// //                   <p className="text-blue-600 font-bold">{Number(d.amount).toLocaleString()} دينار</p>
// //                 </div>
// //                 <div>
                  
// //                   <p className="text-gray-600 text-sm">التاريخ</p>
// //                   <p className="text-gray-800 font-semibold">{formatDate(d.date)}</p>
// //                 </div>
// //               </div>
// //               <div className="flex gap-2">
// //                 <button
// //                   onClick={() => handleEdit(d)}
// //                   className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-3 py-2 rounded font-semibold transition"
// //                 >
// //                   تعديل
// //                 </button>
// //                 <button
// //                   onClick={() => handleDelete(d._id)}
// //                   className="flex-1 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded font-semibold transition"
// //                 >
// //                   حذف
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Creditors

// "use client"

// import { useState, useEffect } from "react"
// import axios from "axios"

// const Creditors = () => {
//   const [creditors, setCreditors] = useState([])
//   const [form, setForm] = useState({ name: "", amount: "", date: "" })
//   const [editingId, setEditingId] = useState(null)

//   const fetchCreditors = async () => {
//     const res = await axios.get("https://monatour-3.onrender.com/api/debt")
//     setCreditors(res.data.filter((item) => item.type === "credit"))
//   }

//   useEffect(() => {
//     fetchCreditors()
//   }, [])

//   const totalAmount = creditors.reduce((sum, item) => sum + Number(item.amount), 0)

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     if (editingId) {
//       await axios.put(`https://monatour-3.onrender.com/api/debt/${editingId}`, {
//         ...form,
//         type: "credit",
//       })
//     } else {
//       await axios.post("https://monatour-3.onrender.com/api/debt", {
//         ...form,
//         type: "credit",
//       })
//     }
//     setForm({ name: "", amount: "", date: "" })
//     setEditingId(null)
//     fetchCreditors()
//   }

//   const handleEdit = (item) => {
//     setForm({
//       name: item.name,
//       amount: item.amount,
//       date: item.date.split("T")[0],
//     })
//     setEditingId(item._id)
//   }

//   const handleDelete = async (id) => {
//     if (window.confirm("هل تريد حذف هذا العنصر؟")) {
//       await axios.delete(`https://monatour-3.onrender.com/api/debt/${id}`)
//       fetchCreditors()
//     }
//   }

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "2-digit",
//       day: "2-digit",
//     })
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 p-4 sm:p-6">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">الدائنين</h1>
//           <p className="text-gray-600">إدارة حسابات الدائنين والمستحقات</p>
//         </div>

//         {/* Total Amount Card */}
//         <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg p-6 sm:p-8 mb-8 shadow-lg">
//           <p className="text-sm sm:text-base opacity-90 mb-2">المجموع الكلي للدائنين</p>
//           <p className="text-3xl sm:text-4xl font-bold">{totalAmount.toLocaleString()} دينار</p>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
//           <h2 className="text-xl font-bold text-gray-800 mb-6">{editingId ? "تعديل الدائن" : "إضافة دائن جديد"}</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//             {/* Name Field */}
//             <div className="flex flex-col">
//               <label className="mb-1 text-gray-700 font-semibold">الاسم</label>
//               <input
//                 type="text"
//                 placeholder="الاسم"
//                 value={form.name}
//                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//                 className="border-2 border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:outline-none transition"
//                 required
//               />
//             </div>

//             {/* Amount Field */}
//             <div className="flex flex-col">
//               <label className="mb-1 text-gray-700 font-semibold">المبلغ</label>
//               <input
//                 type="number"
//                 placeholder="المبلغ"
//                 value={form.amount}
//                 onChange={(e) => setForm({ ...form, amount: e.target.value })}
//                 className="border-2 border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:outline-none transition"
//                 required
//               />
//             </div>

//             {/* Date Field */}
//             <div className="flex flex-col">
//               <label className="mb-1 text-gray-700 font-semibold">التاريخ</label>
//               <input
//                 type="date"
//                 placeholder="التاريخ"
//                 value={form.date}
//                 onChange={(e) => setForm({ ...form, date: e.target.value })}
//                 className="border-2 border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:outline-none transition"
//                 required
//               />
//             </div>

//             {/* Submit Button */}
//              <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105">
//               {editingId ? "تحديث" : "إضافة"}
//             </button>
//           </div>
//         </form>

//         {/* Desktop Table */}
//         <div className="hidden sm:block bg-white rounded-lg shadow-lg overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
//                   <th className="p-4 text-right">الاسم</th>
//                   <th className="p-4 text-right">المبلغ</th>
//                   <th className="p-4 text-right">التاريخ</th>
//                   <th className="p-4 text-right">إجراءات</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {creditors.map((d, index) => (
//                   <tr key={d._id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-gray-100"}>
//                     <td className="p-4 text-gray-800">{d.name}</td>
//                     <td className="p-4 text-gray-800 font-semibold">{Number(d.amount).toLocaleString()} دينار</td>
//                     <td className="p-4 text-gray-600">{formatDate(d.date)}</td>
//                     <td className="p-4 flex gap-2">
//                       <button
//                         onClick={() => handleEdit(d)}
//                         className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-3 py-1 rounded font-semibold transition transform hover:scale-105"
//                       >
//                         تعديل
//                       </button>
//                       <button
//                         onClick={() => handleDelete(d._id)}
//                         className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded font-semibold transition transform hover:scale-105"
//                       >
//                         حذف
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Mobile Cards */}
//         <div className="sm:hidden space-y-4">
//           {creditors.map((d) => (
//             <div key={d._id} className="bg-white rounded-lg shadow-md p-4 border-r-4 border-blue-500">
//               <div className="mb-3">
//                 <p className="text-gray-600 text-sm">الاسم</p>
//                 <p className="text-gray-800 font-bold text-lg">{d.name}</p>
//               </div>
//               <div className="grid grid-cols-2 gap-3 mb-3">
//                 <div>
//                   <p className="text-gray-600 text-sm">المبلغ</p>
//                   <p className="text-blue-600 font-bold">{Number(d.amount).toLocaleString()} دينار</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-600 text-sm">التاريخ</p>
//                   <p className="text-gray-800 font-semibold">{formatDate(d.date)}</p>
//                 </div>
//               </div>
//               <div className="flex gap-2">
//                 <button
//                   onClick={() => handleEdit(d)}
//                   className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-3 py-2 rounded font-semibold transition"
//                 >
//                   تعديل
//                 </button>
//                 <button
//                   onClick={() => handleDelete(d._id)}
//                   className="flex-1 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded font-semibold transition"
//                 >
//                   حذف
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Creditors

"use client"

import { useState, useEffect } from "react"
import axios from "axios"

const Creditors = () => {
  const [creditors, setCreditors] = useState([])
  const [form, setForm] = useState({ name: "", amount: "", date: "" })
  const [editingId, setEditingId] = useState(null)

  const fetchCreditors = async () => {
    const res = await axios.get("https://monatour-3.onrender.com/api/debt")
    setCreditors(res.data.filter((item) => item.type === "credit"))
  }

  useEffect(() => {
    fetchCreditors()
  }, [])

  const totalAmount = creditors.reduce((sum, item) => sum + Number(item.amount), 0)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (editingId) {
      await axios.put(`https://monatour-3.onrender.com/api/debt/${editingId}`, {
        ...form,
        type: "credit",
      })
    } else {
      await axios.post("https://monatour-3.onrender.com/api/debt", {
        ...form,
        type: "credit",
      })
    }
    setForm({ name: "", amount: "", date: "" })
    setEditingId(null)
    fetchCreditors()
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
      fetchCreditors()
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">الدائنين</h1>
          <p className="text-gray-600">إدارة حسابات الدائنين والمستحقات</p>
        </div>

        {/* Total Amount Card */}
        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg p-6 sm:p-8 mb-8 shadow-lg">
          <p className="text-sm sm:text-base opacity-90 mb-2">المجموع الكلي للدائنين</p>
          <p className="text-3xl sm:text-4xl font-bold">{totalAmount.toLocaleString()} دينار</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6">{editingId ? "تعديل الدائن" : "إضافة دائن جديد"}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div>
              <p className="text-gray-600 text-sm mb-1">الاسم</p>
              <input
                type="text"
                placeholder="اسم الطرف"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="border-2 border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:outline-none transition w-full"
                required
              />
            </div>

            <div>
              <p className="text-gray-600 text-sm mb-1">المبلغ</p>
              <input
                type="number"
                placeholder="المبلغ"
                value={form.amount}
                onChange={(e) => setForm({ ...form, amount: e.target.value })}
                className="border-2 border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:outline-none transition w-full"
                required
              />
            </div>

            <div>
              <p className="text-gray-600 text-sm mb-1">التاريخ</p>
              <input
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="border-2 border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:outline-none transition w-full"
                required
              />
            </div>

            <div className="flex items-end">
              <button
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-2 rounded-lg font-semibold w-full"
              >
                {editingId ? "تحديث" : "إضافة"}
              </button>
            </div>
          </div>
        </form>

        {/* Desktop Table */}
        <div className="hidden sm:block bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                  <th className="p-4 text-right">الاسم</th>
                  <th className="p-4 text-right">المبلغ</th>
                  <th className="p-4 text-right">التاريخ</th>
                  <th className="p-4 text-right">إجراءات</th>
                </tr>
              </thead>
              <tbody>
                {creditors.map((d, index) => (
                  <tr key={d._id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-gray-100"}>
                    <td className="p-4 text-gray-800">{d.name}</td>
                    <td className="p-4 text-gray-800 font-semibold">{Number(d.amount).toLocaleString()} دينار</td>
                    <td className="p-4 text-gray-600">{formatDate(d.date)}</td>
                    <td className="p-4 flex gap-2">
                      <button
                        onClick={() => handleEdit(d)}
                        className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-3 py-2 rounded font-semibold transition w-full"
                      >
                       ✏️ تعديل
                      </button>
                      <button
                        onClick={() => handleDelete(d._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded font-semibold transition w-full"
                      >
 🗑️                       حذف
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="sm:hidden space-y-4">
          {creditors.map((d) => (
            <div key={d._id} className="bg-white rounded-lg shadow-md p-4 border-r-4 border-blue-500">
              <div className="mb-3">
                <p className="text-gray-600 text-sm">الاسم</p>
                <p className="text-gray-800 font-bold text-lg">{d.name}</p>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <p className="text-gray-600 text-sm">المبلغ</p>
                  <p className="text-blue-600 font-bold">{Number(d.amount).toLocaleString()} دينار</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">التاريخ</p>
                  <p className="text-gray-800 font-semibold">{formatDate(d.date)}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(d)}
                  className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-3 py-2 rounded font-semibold transition"
                >
                 ✏️ تعديل
                </button>
                <button
                  onClick={() => handleDelete(d._id)}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded font-semibold transition"
                >
 🗑️                 حذف
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Creditors
