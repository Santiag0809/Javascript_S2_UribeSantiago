
gastos = []

//### ProyectoJS ###//

let boleano = true
while (boleano = true) {

    let opci = prompt(`
        ===========================================

                    Simulador de Gasto Diario
        ===========================================
        Seleccione una opción:

        1. Registrar nuevo gasto
        2. Listar gastos
        3. Calcular total de gastos
        4. Generar reporte de gastos
        5. Salir
        ===========================================`)

    if (opci == 1) {
        let montoGasto = parseInt(prompt(`
        ===========================================
                    Registrar Nuevo Gasto
        ===========================================
            Ingrese la información del gasto:

            Monto del gasto :
        ===========================================`));
        let categoria = prompt(`  
        ===========================================
                    Registrar Nuevo Gasto
        ===========================================
            Ingrese la información del gasto:

            Categoria del gasto(comida,tecnologia,etc):
        ===========================================`);
        let descripcion = prompt(`
        ==========================================
                    Registrar Nuevo Gasto
        ==========================================
            Ingrese la información del gasto:

            Ingrese una breve descripción opcional del gasto:`);

        let fecha = prompt(`
        ==========================================
                    Registrar Nuevo Gasto
        ==========================================
            Ingrese la información del gasto:

            Ingrese la fecha a guardar el gasto (YYYY-MM-DD):`);


        let guardar = prompt(`
        ==========================================
                    Registrar Nuevo Gasto
        ==========================================

                ¿Desea guardar el nuevo gasto?
                1. Sí
                2. No`);

        if (guardar === "1") {
            gastos.push({
                "monto": montoGasto,
                "categoria": categoria,
                "descripcion": descripcion,
                "fecha": fecha
            });
            alert("Gasto guardado correctamente.");
        } else {
            alert("Gasto no guardadito.");
        }
    }

    else if (opci == "2") {
        if (gastos.length === 0) {
            alert(" No hay gastos registrados.");
        } else {
            let opcion2 = prompt(`
        ============================================
            ¿Cómo desea listar los gastos?
                1. Listar todos
                2. Listar por categoría
                3. Listar por fecha exacta (YYYY-MM-DD)
        ============================================`);
            if (opcion2 === "1") {
                let lista = "Lista de todos los gastos:\n\n";
                gastos.forEach((gasto, index) => {
                    lista += `${index + 1}. ${gasto.monto} - ${gasto.categoria} (${gasto.descripcion}) - fecha: ${gasto.fecha}\n`;
                });

                alert(lista);
            }

            
            else if (opcion2 === "2") {
                prompt("funcion no implementada");
            }

            else if (opcion2 === "3") {
                let fechaFiltrar = prompt("Ingrese la fecha (YYYY-MM-DD):");
                let encontrados = gastos.filter(gastito => gastito.fecha === fechaFiltrar);

                if (encontrados.length === 0) {
                    alert("No hubo registro de ningun gasto en esta fecha.");
                } else {
                    let lista = `Gastos del día ${fechaFiltrar}:\n\n`;
                    encontrados.forEach((gasto, index) => {
                        lista += `${index + 1}. ${gasto.monto} - ${gasto.categoria} (${gasto.descripcion})\n`;
                    });
                    alert(lista);
                } 
                }

            else {
                alert("Opcion invalida.");
            }
        }
    }

}


// Desarrolado por Santiago Uribe Duarte TI 1097099401 //
