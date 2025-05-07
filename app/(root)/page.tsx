import { FC } from "react"
import { SearchForm } from "../../components/serch-from"
import { Startups } from "../../components/startups"
interface Props {
  searchParams: Promise<{ query?: string }>
}
const Home: FC<Props> = async ({ searchParams }) => {
  const query = (await searchParams).query
  return (
    <>
      <section className="pattern bg-primary w-full flex-col flex items-center justify-center min-h-[600px]">
        <h1 className="bg-black text-white uppercase m-5 font-work-sans sm:text-[54px] text-[36px] max-w-5xl text-center font-extrabold px-2 py-3">
          Where Startups Get Seen and Connections Are Made
        </h1>
        <p className="text-white font-work-sans text-[20px] max-w-5xl text-center my-3">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
      <Startups query={query} />
    </>
  )
}
export default Home
