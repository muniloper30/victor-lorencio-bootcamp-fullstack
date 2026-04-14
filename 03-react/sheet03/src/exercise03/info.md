## Ex03 - Corrección De Código

*Corrige este componente para que funcione correctamente.*

`function Sample() {
const [value, setValue] = useState(0);
function updateValue() {
value = value + 1;
}
return (
<section>
<p>{value}</p>
<button onClick={updateValue}>Actualizar</button>
</section>
);
}`
