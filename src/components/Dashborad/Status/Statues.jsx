// import Styles from './Statues.module.css'
import CardStatus from '../../ui/CardStatus';
import { FaRegListAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { SiMicrodotblog } from "react-icons/si";

export default function Statues (){

    return (
        <section className="py-4">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3">
                        {/* parent card */}
                        <CardStatus counter="300" title="projects" icon = {<FaRegListAlt />} />
                    </div>
                    <div className="col-12 col-md-3"> 
                        
                        <CardStatus counter="150" title="Users" icon = {<FaUsers />} />
                        
                     </div>
                    <div className="col-12 col-md-3"> 
                        
                        <CardStatus counter="100" title="Developer" icon ={<FaCode />}/>

                     </div>
                    <div className="col-12 col-md-3"> 
                        
                        <CardStatus counter="200" title="Blogs" icon = {<SiMicrodotblog />}/>

                     </div>
                </div>
            </div>



        </section>
    );
}