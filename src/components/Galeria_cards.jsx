
const Galeria = ({galeria_img1,texto_1,dcg_1, 
                 galeria_img2,texto_2, dcg_2 ,
                 galeria_img3 ,texto_3,dcg_3,
                 galeria_img4,texto_4,dcg_4,
                 galeria_img5,texto_5,dcg_5,
                 galeria_img6,texto_6,dcg_6,
                 texto_7, galeria_img7,galeria_img8,
                 galeria_img9
                } )=>{                       
                 
    return <>            
    <div className="container mt-5 text-center">
    <div className='row mt-4'>
        <div className="col-sm-12 col-md-4 col-lg-4 py-3">
        <div className="card shadow">
         <img src={galeria_img1} alt="imgaen1_galeria" className="card-img-top img-gallery" />
        <h2 className="h2-gallery"> {texto_1} </h2>
        
				<a href={dcg_1} download="pinta" className="btn btn-success  ">Descarga tu dibujo</a>
                <a href="#"  className="btn btn-dark mt-4">Comprar</a>
        </div>
        </div>

        <div className="col-sm-12 col-md-4 col-lg-4 py-3">
        <div className="card shadow">
        <img src={galeria_img2} alt="imgaen2_galeria" className="card-img-top img-gallery" />
        <h2 className="h2-gallery">{texto_2}</h2>
        
				<a href={dcg_2} download="pinta" className="btn btn-success  ">Descarga tu dibujo</a>
                <a href="#"  className="btn btn-dark mt-4">Comprar</a>
        </div>
        </div>

        <div className="col-sm-12 col-md-4 col-lg-4 py-3">
        <div className="card shadow">
        <img src={galeria_img3} alt="imgaen1_galeria" className="card-img-top img-gallery" />
        <h2 className="h2-gallery">{texto_3}</h2>
    
		<a href={dcg_3} download="pinta" className="btn btn-success  ">Descarga tu dibujo</a>
        <a href="#"  className="btn btn-dark mt-4">Comprar</a>
        </div>
        </div>
        
      
        <div className="col-sm-12 col-md-4 col-lg-4 py-3">
        <div className="card shadow">
        <img src={galeria_img4} alt="imgaen1_galeria" className="card-img-top img-gallery" />
        <h2 className="h2-gallery">{texto_4}</h2>
    
		<a href={dcg_4} download="pinta" className="btn btn-success  ">Descarga tu dibujo</a>
        <a href="#"  className="btn btn-dark mt-4">Comprar</a>
        </div>
        </div>
          
        <div className="col-sm-12 col-md-4 col-lg-4 py-3">
        <div className="card shadow">
        <img src={galeria_img5} alt="imgaen1_galeria" className="card-img-top img-gallery" />
        <h2 className="h2-gallery">{texto_5}</h2>
    
		<a href={dcg_5} download="pinta" className="btn btn-success  ">Descarga tu dibujo</a>
        <a href="#"  className="btn btn-dark mt-4">Comprar</a>
        </div>
        </div>
        
        
        <div className="col-sm-12 col-md-4 col-lg-4 py-3">
        <div className="card shadow">
        <img src={galeria_img6} alt="imgaen1_galeria" className="card-img-top img-gallery" />
        <h2 className="h2-gallery">{texto_6}</h2>
    
		<a href={dcg_6} download="pinta" className="btn btn-success  ">Descarga tu dibujo</a>
        <a href="#"  className="btn btn-dark mt-4">Comprar</a>
        </div>
        </div>
        
        <div className="col-sm-12 col-md-4 col-lg-4 py-3">
        <div className="card shadow">
        <img src={galeria_img7} alt="imgaen1_galeria" className="card-img-top img-gallery" />
        <h2 className="h2-gallery">{texto_7}</h2>
    
        </div>
        </div>

        <div className="col-sm-12 col-md-4 col-lg-4 py-3">
        <div className="card shadow">
        <img src={galeria_img8} alt="imgaen1_galeria" className="card-img-top img-gallery" />
        <h2 className="h2-gallery">{texto_7}</h2>
    

        </div>
        </div>

        <div className="col-sm-12 col-md-4 col-lg-4 py-3">
        <div className="card shadow">
        <img src={galeria_img9} alt="imgaen1_galeria" className="card-img-top img-gallery" />
        <h2 className="h2-gallery">{texto_7}</h2>
        </div>
        </div>
    </div>
  </div>


    </>;   
}
const Parrafo_cards = ()=>{
    return <>
    <h6 className="h4cards"> tenemos en todos los idiomas</h6>
    </>;   
}



export {Galeria ,Parrafo_cards}