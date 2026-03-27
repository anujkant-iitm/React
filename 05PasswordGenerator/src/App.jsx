import { useState, useCallback, useEffect, useRef } from 'react' 

const App = () => {
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState("")
  const [numbers, setNumbers] = useState(false)
  const [characters, setCharacters] = useState(false)

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    const chars = "abcdefghijklmnopqrstuvwxyz"
    const nums = "0123456789"
    let validChars = chars

    if (numbers) {
      validChars += nums
    }

    if (characters) {
      validChars += "!@#$%^&*()_+"
    }
    
    let passwordstr = ""
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length )
      passwordstr += validChars[randomIndex]
    }

    setPassword(passwordstr)
  }, [numbers, characters, length, setPassword])

  const copyPassword = () => {
    passwordRef.current?.select()
    navigator.clipboard.writeText(password)
  }

useEffect(() => {
  generatePassword()
}, [length, numbers, characters])

  return (
    <>
      <div className="container w-full max-w-md border-2 border-gray-300 rounded-lg p-6">
        <div className="mb-4 flex rounded-lg p-0.5">
        <input
          type="text"
          readOnly
          value={password}
          ref={passwordRef}
          className="w-full bg-teal-950 rounded-l-lg text-center text-lg font-mono"
        />
        <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg"
          onClick={copyPassword}
        >
          Copy
        </button>
        </div>


        <div className="">
          <label htmlFor="length">Length : {length}</label>
          <input
            type="range"
            id="length"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>


        <div className="input-group">
          <label>
            <input
              type="checkbox"
              checked={numbers}
              onChange={() => setNumbers((prev)=> !prev)}
            />
            Include Numbers
          </label>
        </div>
        <div className="input-group">
          <label>
            <input
              type="checkbox"
              checked={characters}
              onChange={(e) => setCharacters(e.target.checked)} // aisa bhi kar sakte hai
            />
            Include Special Chars
          </label>
        </div>
      </div>
    </>
  )
}

export default App
