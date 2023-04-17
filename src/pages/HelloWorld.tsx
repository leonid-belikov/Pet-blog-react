import React, { useCallback, useState } from 'react'

function HelloWorld() {
  const [value, setValue] = useState<string>('')
  const [visible, setVisible] = useState<boolean>(false)

  const handleClick = useCallback(() => {
    if (value !== 'hello') return
    setVisible(prevState => !prevState)
  }, [value])

  const handleChange = useCallback((event: React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement
    setValue(target.value)
  }, [])

  return (
    <div>
      <input id='search' type='text' value={value} onChange={handleChange}/>
      <button id='toggle' onClick={handleClick}>HELLO WORLD</button>
      {visible && <h1 id="hello">HELLO WORLD</h1>}
    </div>
  )
}

export default HelloWorld
