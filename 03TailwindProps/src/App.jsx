import './App.css'
import Card from './assets/Card'

function App() {

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <Card views={234} />
        <Card views={156} btnText="Hii" />
        <Card views={300} btnText="View Details" />
      </div>
    </>
  )
}

export default App
