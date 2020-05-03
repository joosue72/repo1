const listaloggedout = document.querySelectorAll('.logged-out')
const listaloggedin = document.querySelectorAll('.logged-in')
const datosdelacuenta = document.querySelector('.datosdelacuenta');

const configurarMenu = (user) => {
    if(user){
        db.collection('usuarios').doc(user.uid).get().then(doc =>{
            const html =  `
                <p>Nombre: ${doc.data().nombre } </p>
                <p>Correo: ${user.email } </p>
                <p>Nombre: ${doc.data().telefono } </p>
                <p>Nombre: ${doc.data().direccion } </p>

            
            
                `;

            datosdelacuenta.innerHTML = html;
        });
        listaloggedin.forEach( item => item.style.display = 'block');
        listaloggedout.forEach( item => item.style.display = 'none');
    }else{

        
        listaloggedin.forEach( item => item.style.display = 'none');
        
        listaloggedout.forEach( item => item.style.display = 'block');

    }
};


const lsitadeplatillos = document.getElementById('listadeplatillos');

const obtienePlatillos = (data) => {

    if(data.length){

        let html = '';
        data.forEach(doc =>{
            const platillo = doc.data();
            const columna = `


            
            
            <div class="col-12 col-md-4 ">

            <br>
            <br>
            <br>
                <img src="images/${platillo.imagen}" alt="${platillo.nombre}">
                <p class="text-white">${platillo.nombre}</p>
                <p class="text-danger">$${platillo.precio}</p>
                <a href="https://www.paypal.me/josueromo/${platillo.precio}" target="_blank">
                    <button class="btn btn-primary">Pagar Ahora</button>
                </a>
            </div>
            `;

            html += columna;
        });

        lsitadeplatillos.innerHTML = html;
    }
    else{
        lsitadeplatillos.innerHTML = '<img src="https://images.squarespace-cdn.com/content/5a61f37ae45a7c70210b916b/1516973560749-9ZBMVC78835AP9VQJOOU/Welcome.png?format=750w&content-type=image%2Fpng" alt="Italian Trulli">'
    }

};


