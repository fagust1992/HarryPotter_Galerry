
const Header = ({ruta_img,ruta_img2})=>{

    return <>
 
 <header className="header"> 
<span>Tribute a Harry Potter</span>
<img src={ruta_img2} alt="" />
</header>
<div className="header-titulo ">
 <h1>VIEW PAST 2 DISCUSSIONS</h1>
 <div className="logo"> <img src={ruta_img} alt="" /></div>

</div>
    </>;   
}


export default Header;