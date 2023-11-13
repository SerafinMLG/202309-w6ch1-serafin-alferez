# Week 4 - Challenge 3

## Teléfono React

Aquí tienes la maquetación HTML/CSS de una aplicación, tendrás que programarla en React.

- Se debe poder escribir un número de teléfono clicando en los botones numéricos. La tecla borrar puede borrar el último dígito o borrar el número completo, como prefieras.
- Sólo se verá o el botón Llamar o el botón Colgar, nunca los dos a la vez.
- No se puede introducir un número de más de 9 cifras.
- El botón Llamar sólo se puede pulsar si el número tiene 9 cifras. Cuando tenga 9 cifras el botón debe tener la clase "active".
- El mensaje superior "Llamando..." sólo aparece cuando se pulsa el botón "Llamar" y mientras dure la llamada. Usa la clase "off" para controlar su visibilidad (el elemento HTML correspondiente debe seguir estando, aunque no se vea).
- Al pulsar el botón "Llamar", éste debe desaparecer del DOM y debe aparecer en su lugar el botón "Colgar". El teclado tiene que quedar deshabilitado.
- Al pulsar el botón "Colgar", éste debe desaparecer y debe aparecer en su lugar el botón "Llamar". El teclado tiene que habilitarse. Además, se debe borrar el número de teléfono.
- Si no ocurre nada tras cinco segundos de llamada, ésta se debe colgar automáticamente.

Separa todo en los siguientes componentes:

- Info
- Display
- Actions
  - Action
- Keyboard
  - Key

Entrega también un listado de responsabilidades en el README

- ¿Qué renderiza?
- Info: elemento span con mensaje de llamada
- Display: elemento span con número al que se llama
- Actions: elemento div que contiene componente display y action
  - Action: elementos a con botones para llamar o colgar llamada
- Keyboard: elemento div que contiene un ol y contiene el componente key

  - Key: elementos li con bottones para marcar números de llamada o borrar el número

- ¿Qúe interacciones del usuario tiene?

- Info: muestra información de llamada
- Display: muestrael número al que se llama
- Actions
  - Action: permite pulsar el boton de llamada o colgar
- Keyboard

  - Key: permite marcar números para llamar o borrar el número

- ¿Qué información recibe y desde donde?

- Info: recibe la propiedad isCall del useContext AppContext
- Display: recibe la propiedad phoneNumber del useContext AppContext
- Actions:
  - Action: recibe la propiedad isActiveCall y las funciones setCall, setActiveCall, setPhoneNumber del useContext AppContext
- Keyboard:
  - Key: recibe la propiedad phoneNumber y las funciones setPhoneNumber, setActiveCall del useContext AppContext
