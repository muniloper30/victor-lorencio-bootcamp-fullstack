import { Panel } from "./Panel/Panel"

export const Exercise07 = () => {
    return (
        <>
            <Panel>
                <h1>Hola!! Este es un título desde un children</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nobis? Aliquid fuga obcaecati molestias, saepe voluptates velit nostrum alias officia similique aspernatur explicabo doloribus assumenda maiores magni, consequuntur quod. Nihil.</p>
            </Panel>
            <Panel>
                <span>Lista de la compra</span>
                <ul>
                    <li>Habarti</li>
                    <li>Embutido de pavo</li>
                    <li>Pechuga de pollo</li>
                    <li>Cerveza</li>
                </ul>
            </Panel>
            <Panel>
                <span>PARA MAS INFO ACCEDE AQUÍ</span>
                <button>Más detalles</button>
            </Panel>
        </>
    )
}