import { Link } from "react-router-dom";
import Contact from '../components/ui/Contact';
import Experience from '../components/ui/Experience';
import Formation from '../components/ui/Formation';
import Langue from '../components/ui/Langue';
import Competence from '../components/ui/Competence';
import Loisir from '../components/ui/Loisir';


export default function Home() {
    return (
        <div className="flex gap-5 p-5 max-md:flex-col">
            {/* <Link className='link' to={'/admin'}>ADMIN</Link> */}
            <div className='flex flex-col gap-5 w-1/3 max-md:w-full'>
                <Contact />
                <Competence />
                
            </div>
            <div className='flex flex-col gap-5 w-2/3 max-md:w-full'>
                {/* <h1 className="text-4xl font-semibold text-center max-md:hidden" >Curriculum Vitae</h1> */}
                {/* <Experience />
                <Formation /> */}
            </div>
        </div>
    );
}
