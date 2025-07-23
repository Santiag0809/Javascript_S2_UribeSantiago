ingredientes = []
burguer = []
category = []
// CAFETERIA CAMPUS //

let boleano = true
while (boleano = true) {

    let opci = prompt(`
        ===========================================

                    Simulador de Cafeteria
        ===========================================
        Seleccione una opción:

        1. Crear nuevas opciones
        2. Listar opciones
        3. Actualizar opciones
        4. Borrar opciones
        5. Salir
        ===========================================`)


    if (opci == 1) {

        let opciones = parseInt(prompt(`
            ===========================================
                        Registrar nueva opcion
            ===========================================
                Ingrese la opcion que desea añadir:
    
                1. ingrediente :
                2. Categorias :
                3. hamburguesa  :
                4. chef :
            ===========================================`));

        if (opciones == 1) {
            let nombreIng = prompt(`
            ===========================================
                    Registrar nombre ingrediente
            ===========================================`);

            let descriIng = prompt(`
            ===========================================
                    Registrar descripcion ingrediente
            ===========================================`);

            let precioIng = parseInt(prompt(`
            ===========================================
                    Registrar precio ingrediente
            ===========================================`));

            let stockIng = parseInt(prompt(`
            ===========================================
                    Registrar stock ingrediente
            ===========================================`));

            let guardar = prompt(`
            ==========================================
                    Registrar nuevo ingrediente
            ==========================================

                ¿Desea guardar el nuevo ingrediente?
                1. Sí
                2. No`);

            if (guardar === "1") {
                ingredientes.push({
                    "Nombre": nombreIng,
                    "Descripcion": descriIng,
                    "Precio": precioIng,
                    "Stock" : stockIng
                });
                alert("Ingrediente guardado correctamente.");
            } else {
                alert("Ingrediente no guardadito.");
            }
        }


        else if (opciones == 2) {
            let categoriA = prompt(`
            ===========================================
                    Registrar nombre categoria
            ===========================================`);

            let descripA = prompt(`
            ===========================================
                    Registrar descripcion categoria
            ===========================================`);


            let guardar = prompt(`
            ==========================================
                    Registrar nuevo ingrediente
            ==========================================

                ¿Desea guardar la nueva burguer?
                1. Sí
                2. No`);

            if (guardar === "1") {
                category.push({
                    "Nombre": categoriA,
                    "Descripcion": descripA
                });
                alert("Categoria guardada correctamente.");
            } else {
                alert("Categoria no guardadita.");
            }
        }

        else if (opciones == 3) {
            let nombreB = prompt(`
            ===========================================
                    Registrar nombre burguer
            ===========================================`);

            let categoriaB = prompt(`
            ===========================================
                    Registrar descripcion ingrediente
            ===========================================`);

            let ingredienteb = prompt(`
            ===========================================
                    Registrar ingrediente
            ===========================================`);

            let precioB = parseInt(prompt(`
            ===========================================
                    Registrar stock ingrediente
            ===========================================`));

            let chef = prompt(`
            ===========================================
                    Registrar chef
            ===========================================`);

            let guardar = prompt(`
            ==========================================
                    Registrar nuevo ingrediente
            ==========================================

                ¿Desea guardar la nueva burguer?
                1. Sí
                2. No`);

            if (guardar === "1") {
                burguer.push({
                    "Nombre": nombreB,
                    "Categoria": categoriaB,
                    "Ingrediente": ingredienteb,
                    "Precio": precioB,
                    "Chef" : chef
                });
                alert("Burguer guardada correctamente.");
            } else {
                alert("Burguer no guardadita.");
            }
        }
        else if (opciones == 4) {
            let nombreChef = prompt(`
            ===========================================
                    Registrar nombre chef
            ===========================================`);

            let especialidad = prompt(`
            ===========================================
                    Registrar especialidad del chef
            ===========================================`);


            let guardar = prompt(`
            ==========================================
                    Registrar nuevo ingrediente
            ==========================================

                ¿Desea guardar la nueva burguer?
                1. Sí
                2. No`);

            if (guardar === "1") {
                category.push({
                    "Nombre": nombreChef,
                    "Especialidad": especialidad
                });
                alert("Chef guardad@ correctamente.");
            } else {
                alert("Chef no guardadito.");
            }
        }
    }
    
}







// CREADO POR : SANTIAGO URIBE T.I 1.097.099.401 //