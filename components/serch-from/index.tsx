import { FC } from "react"
import Form from "next/form"
import { Search } from "lucide-react"
import { ResetButton } from "./ResetButton"
interface SearchFormProps {
  query?: string
}
export const SearchForm: FC<SearchFormProps> = ({ query }) => {
  return (
    <Form
      action="/"
      scroll={false}
      className="search-form w-2xl flex gap-5 justify-between my-3 bg-white border-black border-[6px] rounded-full py-2 px-7"
    >
      <input
        name="query"
        defaultValue={query}
        placeholder="Search Startups"
        className="text-black flex-1 outline-none h-auto placeholder:text-black-100 font-work-sans font-bold text-2xl border-0"
      />
      <div className="flex gap-2">
        {query && <ResetButton />}
        <button
          className="cursor-pointer p-3 size-[50px] bg-black rounded-full flex items-center justify-center text-white"
          type="submit"
        >
          <Search size={20} />
        </button>
      </div>
    </Form>
  )
}
