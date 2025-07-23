ingredientes = [{
    "Nombre": "Queso cheddar",
    "Descripcion": "Queso cheddar derretido",
    "Precio": 1.5,
    "Stock": 200
}]
burguer = [{
    "NombreBurguer": "Doble Carne",
    "CategoriaBurguer": "Gourmet",
    "IngredienteBurguer": ["Pan de sésamo", "Doble carne de res", "Queso cheddar", "Bacon", "Lechuga", "Cebolla caramelizada", "Salsa BBQ"],
    "PrecioBurguer": 12,
    "ChefBurguer": "ChefC"
}]
category = [ {
    "NombreCategoria": "Gourmet",
    "DescripcionCategoria": "Hamburguesas gourmet con ingredientes premium"
}]
chef = [{
    "NombreChef": "ChefC",
    "Especialidad": "Gourmet"
}]

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
                    "NombreCategoria": categoriA,
                    "DescripcionCategoria": descripA
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
                    "NombreBurguer": nombreB,
                    "CategoriaBurguer": categoriaB,
                    "IngredienteBurguer": ingredienteb,
                    "PrecioBurguer": precioB,
                    "ChefBurguer" : chef
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
                chef.push({
                    "NombreChef": nombreChef,
                    "Especialidad": especialidad
                });
                alert("Chef guardad@ correctamente.");
            } else {
                alert("Chef no guardadito.");
            }
        }
    }

    else if (opci == 2) {
    let listita = prompt(`
    ============================================
        ¿Cómo deseas listar?
        1. Listar por ingrediente
        2. Listar por hamburguesa
        3. Listar por categoria
        4. Listar por chef
    ============================================`)

    if (listita === "1") {
        let lista = "Lista de todos los ingredientes:\n\n";
        ingredientes.forEach((ing, index) => {
            lista += `${index + 1}. ${ing.Nombre} - (${ing.Descripcion}) - precio: $${ing.Precio} (${ing.Stock}) \n`;
        });
        alert(lista);
    }

    else if (listita === "2") {
        let lista = "Lista de todas las categorias:\n\n";
        category.forEach((c, index) => {
            lista += `${index + 1}. ${c.NombreCategoria} - (${c.DescripcionCategoria}) \n`;
        });
        alert(lista);
    }

    else if (listita === "3") {
        let lista = "Lista de todas las hamburguesas:\n\n";
        burguer.forEach((b, index) => {
            lista += `${index + 1}. ${b.NombreBurguer} - (${b.CategoriaBurguer}) - precio: $${b.PrecioBurguer} (${b.IngredienteBurguer}) - chef: (${b.ChefBurguer}) \n`;
        });
        alert(lista);
    }

    else if (listita === "4") {
        let lista = "Lista de todos los chef:\n\n";
        chef.forEach((che, index) => {
            lista += `${index + 1}. ${che.NombreChef} - (${che.Especialidad}) \n`;
        });
        alert(lista);
    }
    }
    
}








// CREADO POR : SANTIAGO URIBE T.I 1.097.099.401 //