import Comidas from '@/models/Comidas'
import { connectDB } from '@/utils/db'


async function menu() {
  await connectDB()
  const menuGet = await Comidas.find()
  return menuGet;
}

const getMenu = async () => {
  const res = await fetch('https://conexionmongo.vercel.app/api/comidas', {cache:'no-store'})
  const data = await res.json();
  console.log(data)

}


const Page = async() => {

    const comidas = await menu();
    getMenu();
    
  

  return (

    <div className='container bg-yellow-800'>
      {comidas.map(comida =>(
        <div key={comida._id}>
          <p>
            {comida.title}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Page
