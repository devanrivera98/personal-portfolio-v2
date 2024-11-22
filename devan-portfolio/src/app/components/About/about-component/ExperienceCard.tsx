export default function ExperienceCard({title, company, date, firstDuty, duties }: {title: string, company: string, firstDuty: string, date: string, duties: string []}) {

  const dutiesMap = duties.map((item, index) => (
    <li key={index}>{item}</li>
  ))

  return (
    <>
    <div className="mb-6">
          <h2 className="text-xl font-bold">{title}</h2>
          <p>{company}</p>
          <p className="text-sm">{date}</p>
          <div className="flex">
            <p className="hidden overflow-hidden text-ellipsis whitespace-nowrap">{firstDuty}</p>
            <button className="hidden text-xs whitespace-nowrap">See More</button>
            <ul className="flex flex-col gap-y-2 list-disc list-inside">
              {dutiesMap}
            </ul>
          </div>
        </div>
    </>
  )
}
