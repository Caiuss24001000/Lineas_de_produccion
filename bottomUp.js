//Numero de lineas de producción
const NUM_LINE = 2;
//Numero de estaciones
const NUM_STATION = 4;

//Encuentra el mínimo de dos números 
function min(a, b)
{
    return a < b ? a : b;
}

function lineasProduccion(a, t, e, x)
{
    //Arreglos donde se almacenan los resultados óptimos de las estaciones
    let T1 = new Array(NUM_STATION);
    let T2 = new Array(NUM_STATION);
    let i;

    // Costo(tiempo) para llegar a la primera estación de la linea 1
    T1[0] = e[0] + a[0][0];
    
    // Costo(tiempo) para llegar a la primera estación de la linea 2
    T2[0] = e[1] + a[1][0];

    //LLenado de las tablas de forma recursiva 
    for (i = 1; i < NUM_STATION; ++i)
    {
        //Almacena el costo mínimo de llegada a la estación 
        T1[i] = min(T1[i - 1] + a[0][i],
                    T2[i - 1] + t[1][i] + a[0][i]);
        T2[i] = min(T2[i - 1] + a[1][i],
                    T1[i - 1] + t[0][i] + a[1][i]);
    }

    //Agrega el tiempo de salida y devuelve el valor mínimo 
    return min(T1[NUM_STATION - 1] + x[0],
            T2[NUM_STATION - 1] + x[1]);
}

function lineasProduccionTopDown(a, t, e, x, n, t1t, t2t)
{
    let i;

    if()

    if(a[0][0] || a[1][0]){

    }


    // Costo(tiempo) para llegar a la primera estación de la linea 1
    T1[0] = e[0] + a[0][0];
    
    // Costo(tiempo) para llegar a la primera estación de la linea 2
    T2[0] = e[1] + a[1][0];

    //LLenado de las tablas de forma recursiva 
    for (i = 1; i < NUM_STATION; ++i)
    {
        //Almacena el costo mínimo de llegada a la estación 
        T1[i] = min(T1[i - 1] + a[0][i],
                    T2[i - 1] + t[1][i] + a[0][i]);
        T2[i] = min(T2[i - 1] + a[1][i],
                    T1[i - 1] + t[0][i] + a[1][i]);
    }

    //Agrega el tiempo de salida y devuelve el valor mínimo 
    return min(T1[NUM_STATION - 1] + x[0],
            T2[NUM_STATION - 1] + x[1]);
}

// Driver Code
    let a = [[4, 5, 3, 2],
                            [2, 10, 1, 4]];
    let t = [[0, 7, 4, 5],
                            [0, 9, 2, 8]];
    let e = [10, 12], x = [18, 7];

    document.write(lineasProduccion(a, t, e, x));