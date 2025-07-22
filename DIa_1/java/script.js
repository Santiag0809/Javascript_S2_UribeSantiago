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

            Ingrese una breve descripción del gasto:`);

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
                "descripcion": descripcion
            });
            alert("Gasto guardado correctamente.");
        } else {
            alert("Gasto no guardadito.");
        }
    }

    }


// Desarrolado por Santiago Uribe Duarte //
