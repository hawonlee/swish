import '../App.css'
import Logo from '/logo.svg'

function Menu() {

    return (
        <div className="flex w-full items-center justify-items-start">
            <img src={Logo} alt={"logo"} className="w-[22px] h-[22px] mr-2"/>
            <div className="text-2xl">swish</div>
        </div>
    )
}

export default Menu;