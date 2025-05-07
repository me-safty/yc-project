import { FC } from "react"
interface StartupsProps {
  query?: string
}
export const Startups: FC<StartupsProps> = ({ query }) => {
  return (
    <section className="section_container">
      <p className="text-30-semibold ">
        {query ? `Search results for "${query}"` : "Startups"}
      </p>
      <div className=""></div>
    </section>
  )
}
