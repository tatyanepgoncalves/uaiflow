import { Search } from 'lucide-react'

interface InputSearchProps {
  searchTerm: string
  setSearchTerm: (searchTerm: string) => void
}

export default function InputSearch({
  setSearchTerm,
  searchTerm,
}: InputSearchProps) {
  return (
    <div className="p-2 pb-1">
      <div className="flex items-center rounded-lg border border-zinc-800 bg-zinc-950 px-2.5 py-1.5">
        <Search className="mr-2 h-3.5 w-3.5 shrink-0 text-zinc-500" />
        <input
          className="w-full bg-transparent text-white text-xs placeholder-zinc-500 focus:outline-none"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar idioma..."
          value={searchTerm}
        />
      </div>
    </div>
  )
}
