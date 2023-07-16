
import{Routes,Route} from  'react-router-dom'
import Home from './pages/Home'
import AddNewContact from './pages/AddNewContact'
import EditContact from './pages/EditContact'
import ContactInfo from './pages/ContactInfo'

function App() {
  
  return (
   <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/new-contact' element={<AddNewContact/>}/>
          <Route path='/edit/:id' element={<EditContact/>}/>
          <Route path='/info/:id' element={<ContactInfo/>}/>
        </Routes>
   </div>
  )
}

export default App
