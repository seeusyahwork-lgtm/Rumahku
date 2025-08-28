
import Sidebar from '../komponen/Sidebar/Sidebar'
import DashboardTP from '../komponen/Dashboard/DashboardTP'

// export const PDashboard = () => {
//   return (
//     <>
//     <main className='grid gap-4 p-4 grid-cols-[250px_minmax(900px,_1fr)]'>
//     <Sidebar/>
//     <Dasboard/>
//     </main>
//     </>
//   )
// }


const PAdminTP = () => {
  return (
     <main className='grid gap-2 p-4 grid-cols-[250px_minmax(900px,_1fr)]'>
    <Sidebar/>
    <DashboardTP/>
    </main>
  )
}

export default PAdminTP