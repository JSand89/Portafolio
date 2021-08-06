
//----------- panele 50 retos--------------------------
const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    console.log(panel)

    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')

    })
    
})

function removeActiveClasses(){
    panels.forEach( panel=>{
        panel.classList.remove('active')

    }
        )
}
//-----------fin 50 paneles---------------------------