
import Sidebar from '../komponen/Sidebar/Sidebar'
import DKonsumen from '../komponen/Dashboard/DKonsumen'

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


const PAdmin = () => {
  return (
     <main className='grid gap-2 p-4 grid-cols-[250px_minmax(900px,_1fr)]'>
    <Sidebar/>
    <DKonsumen/>
    </main>
  )
}

export default PAdmin

