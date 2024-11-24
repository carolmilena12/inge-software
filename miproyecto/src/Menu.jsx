import { Listado } from "./Listado"


export const Menu = () => {
  return (
    <div>
        <h1>🐧Menu Principal</h1>
        <ul id="lista-lenguajes">
            <Listado lenguaje='PHP'/>
            <Listado lenguaje='CSS'/>
            <Listado lenguaje='HTML'/>
            <Listado lenguaje='JAVASCRIPT'/>
            
        </ul>

    </div>
  )
}
