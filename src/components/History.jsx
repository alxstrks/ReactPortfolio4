import jsonData from '../assets/History1.json'
import {HiArrowUpRight} from 'react-icons/hi2'

export default function History() {

    const frameworkItems = (frameworkArray) => {
        let id = 0;
        let items = frameworkArray.map(e => 
            <div key={id++} className="bg-frameworkBackground text-frameworkText px-3 py-1 m-2 rounded-full w-fit bg-opacity-20">
                {e}
            </div>
        )
        return items
    }
    
    const historyItems = jsonData["history"].map(curr => 
        <div key={curr.id} className="columns-2 flex group md:hover:shadow-inner md:hover:bg-gray-400 md:hover:bg-opacity-10 md:hover:shadow-lg rounded-lg my-5 md:p-5">
            <div className="text-subtleText italic md:text-center w-1/3 md:px-3">
                {curr.job.time}
            </div>
            <div className="w-fit">
                <h2 className="md:group-hover:text-frameworkBackground hover:text-frameworkBackground flex group/title pb-2">
                    {curr.job.title}&nbsp;<HiArrowUpRight className="transform group-hover/title:-translate-y-1 group-hover/title:translate-x-1 md:group-hover:translate-x-1 md:group-hover:-translate-y-1"/>
                </h2>
                <p className="text-subtleText">
                    {curr.job.desc}
                </p>
                <div className="flex flex-wrap">
                    {frameworkItems(curr.job.framework)}
                </div>
            </div>
        </div>
    )

  return (
    <div id="section2">
        {historyItems}
    </div>
  )
}