// callback function

function sayMyName(name) {
    console.log('antes de executar a função callbak')


    name()

    
    console.log('depois de executar a callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)