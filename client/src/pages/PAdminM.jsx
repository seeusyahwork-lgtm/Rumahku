
import Sidebar from '../komponen/Sidebar/Sidebar'
import DasboardMandor from '../komponen/Dashboard/DasboardMandor'

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


const PAdminP = () => {
  return (
     <main className='grid gap-2 p-4 grid-cols-[250px_minmax(900px,_1fr)]'>
    <Sidebar/>
    <DasboardMandor/>
    </main>
  )
}

export default PAdminP