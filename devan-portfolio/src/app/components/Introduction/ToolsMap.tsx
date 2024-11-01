import { mainTools } from "./mainTools"
import { useTheme } from "next-themes"


export default function ToolsMap() {

  const { theme } = useTheme()

  const mapTools = mainTools.map(({title, lightColor, darkColor}, index)=>
  <>
    <li className='li-tools py-1 '>
      <span className={theme === 'dark' ? 'p-1 bg-darkColor' : 'bg-lightColor'}>{title}</span>
    </li>
  </>
  )

  return mapTools;
}
