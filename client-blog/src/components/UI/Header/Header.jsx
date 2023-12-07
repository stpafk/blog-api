import Anchor from "./Anchor"
import List from "./List"

export default function Header() {
    return (
        <header>
            <div className="outer">
                <div className="inner">
                    <List />
                    <Anchor />
                </div>    
            </div>
        </header>
    )
};