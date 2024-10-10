export default function Footer(){
    return (
        <>
                <div className=" grid gap-5 just-between grid-cols-4 p-2 remove-tablet">
            <div className=" grid w-4/12">
                <div className="row gap-3 p-0">
                    <h1 className="text-center p-0">Furnicor</h1>
                </div>
                <p className="brown p-0">Furnicor is platform that provide all kind of furniture that you
                    can
                    imagine to
                    make your
                    home more aesthetic. From sleek minimalist designs to cozy rustic charm, Furnicor boasts a diverse
                    collection that caters to every taste and style preference.</p>
            </div>
            <ul className="grid remove-tablet">
                <li>
                    <p className="p-0 darkBrown">About</p>
                </li>
                <li> <a href="" className="p-0">
                        About us
                    </a></li>
                <li><a href="" className="p-0">
                        Shop
                    </a></li>
                <li><a href="" className="p-0">
                        Cart
                    </a></li>
                <li><a href="" className="p-0">
                        Contact
                    </a></li>
            </ul>
            <ul className="grid remove-tablet">
                <li>
                    <p className="p-0 darkBrown">Categories</p>
                </li>
                <li><a href="" className="p-0">Chairs</a></li>
                <li><a href="" className="p-0">Sofa</a></li>
                <li><a href="" className="p-0">Lamp</a></li>
                <li><a href="" className="p-0">Table</a></li>
            </ul>
            <ul className="grid remove-tablet">
                <li>
                    <p className="p-0 darkBrown">Contact</p>
                </li>
                <li><a href="" className="p-0 ">rinashalaa777@gmail.com</a></li>
                <li> <a href="" className="p-0 ">+1 234 567 890</a></li>
                <li><a href="" className="p-0 ">Instagram</a></li>
                <li> <a href="" className="p-0 ">Facebook</a></li>
                <li><a href="" className="p-0 ">Twitter</a></li>
            </ul>
        </div>

        <ul className="dNone tablet-footer just-between">
            <li className="p-2">Copyright © 2024 Furnicor. </li>
            <li className="p-2"><a href="" className="p-0 ">rinashalaa777@gmail.com</a></li>
        </ul>
        </>
    )
}