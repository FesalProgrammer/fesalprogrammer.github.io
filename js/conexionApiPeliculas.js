const btnBefore = document.getElementById("btn-before");
const btnNext = document.getElementById("btn-next");
const contenedor = document.getElementById("tendenciasContainer");

let pagina = 1;

btnBefore.addEventListener("click", ()=>{
    if(pagina > 1){
        pagina -= 1;
        cargarPeliculas();
    }
});

btnNext.addEventListener("click", ()=>{
    if(pagina < 1000){
        pagina += 1;
        cargarPeliculas();
    }
});

const cargarPeliculas = async()=>{

   try{

    const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d7ac539886fdfb238f63e7090e0a52e3&language=es-MX&page=${pagina}`)
    console.log(respuesta);

    if(respuesta.status === 200){

        const datos = await respuesta.json();
        console.log(datos);

        let peliculas = [];

        datos.results.forEach(pelicula => {
            peliculas += `
            <div class="card pelicula" style="width: 20rem;">
                <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" class="card-img-top" alt="...">
                
            </div>
            `;            
        });

        /*contenedor.innerHTML = peliculas;*/
        tendenciasContainer.innerHTML = peliculas;
    }

   }
   
   catch(error){
    console.log(error.message);

   }

}

cargarPeliculas();