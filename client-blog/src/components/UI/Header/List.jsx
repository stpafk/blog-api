
export default function List() {

    return(
        <>
        <div className="nav inner left">
                    <a href="">
                        <img src="Logo" alt="" />
                    </a>
                    <ul className="nav left ul">
                        <li className="nav link home">
                            <a href="/">Home</a>
                        </li>
                        <li className="nav link contact">
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="nav inner right">
                    <ul className="nav right ul">
                        <li className="nav link" id="twitter">
                            <a href="https://twitter.com/dubsteph4n">
                                
                            </a>
                        </li>
                        <li className="nav link" id="github">
                            <a href="https://github.com/stpafk">

                            </a>
                        </li>
                        <li className="nav link" id="linkedin">
                            <a href="https://www.linkedin.com/in/stephan-allek-weigert-53801619">

                            </a>
                        </li>
                    </ul>
                </div>
        </>
    );

};