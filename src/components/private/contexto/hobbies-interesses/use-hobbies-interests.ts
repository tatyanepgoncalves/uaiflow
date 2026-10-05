import { useCallback, useState } from 'react'
import { PRESET_HOBBIES } from '../data'

export default function useHobbiesInteresses() {
  const [favoriteHobbies, setFavoriteHobbies] = useState<string[]>([])
  const [hobbies, setHobbies] = useState<string[]>([])
  const [customHobby, setCustomHobby] = useState('')
  const [customHobbies, setCustomHobbies] = useState<string[]>([])

  const handleCustomHobbyChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCustomHobby(e.target.value)
    },
    []
  )

  const addCustomHobby = useCallback(() => {
    setCustomHobby((currentValue) => {
      const trimmed = currentValue.trim()
      if (!trimmed) {
        return currentValue
      }
      setCustomHobbies((prev) =>
        prev.includes(trimmed) || PRESET_HOBBIES.includes(trimmed)
          ? prev
          : [...prev, trimmed]
      )

      setFavoriteHobbies((prev) =>
        prev.includes(trimmed) ? prev : [...prev, trimmed]
      )

      return ''
    })
  }, [])

  const toggleHobby = (hobby: string) => {
    setFavoriteHobbies((prev) =>
      prev.includes(hobby) ? prev.filter((h) => h !== hobby) : [...prev, hobby]
    )
  }

  const handleKeyDownHobby = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        addCustomHobby()
      }
    },
    [addCustomHobby]
  )

  const allHobbies = [...PRESET_HOBBIES, ...customHobbies]

  return {
    addCustomHobby,
    allHobbies,
    customHobbies,
    customHobby,
    favoriteHobbies,
    handleCustomHobbyChange,
    handleKeyDownHobby,
    hobbies,
    setCustomHobbies,
    setCustomHobby,
    setFavoriteHobbies,
    setHobbies,
    toggleHobby,
  }
}
