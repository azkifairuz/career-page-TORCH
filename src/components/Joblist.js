import { useNavigate } from "react-router-dom";

function Joblist() {
    const navigate = useNavigate()
    const lokers = [
        {
        'JobTitle':'web dev1',
        'CompanyName':'PT PT an',
        'Deskripsi':'lorem ipsum doler'
        },
        {
            'JobTitle':'web dev2',
            'CompanyName':'PT PT an',
            'Deskripsi':'lorem ipsum doler'
        },
        {
            'JobTitle':'web dev3',
            'CompanyName':'PT PT an',
            'Deskripsi':'lorem ipsum doler'
        },
        {
            'JobTitle':'web dev4',
            'CompanyName':'PT PT an',
            'Deskripsi':'lorem ipsum doler'
        },
    ]

    function CardJob(props) {
        return(
        <div className="w-full h-32 min-w-0  flex flex-col justify-evenly  m-auto p-2 border border-slate-500  text-black rounded-lg shadow shadow-slate-400 bg-slate-20 ">
            <h1>{props.jobTitle}</h1>
            <p>{props.company}</p>
            <div className="flex justify-between">
                <h1>{props.deskripsi}</h1>
                <button onClick={navigate('/joblistDetile')} className="bg-blue-500 rounded-md text-white w-20 p-2  ">Lihat</button>
            </div>
        </div>
        )
    }
        return(
            <div className="min-h-screen mt-10">
                <div className="w-10/12 grid md:grid-cols-2 grid-flow-row justify-items-stretch gap-5 m-auto">
                {
                    lokers.map((loker)=> 
                    <CardJob  jobTitle={loker.JobTitle} company={loker.CompanyName} deskripsi={loker.Deskripsi}/>,
                    )
                }
                </div>
            </div>
        )
    
    
}
export default Joblist;