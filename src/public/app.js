const socket = io()

const name = prompt('Ismingizni kiriting')

socket.emit('new-user', name)

const h4 = document.getElementById('h4')
h4.innerHTML += 'You joined'

socket.on('joined-user', data => {
    const h4 = document.createElement('h4')
    h4.innerHTML += `${data} joined`
    chats.appendChild(h4)
})

form.addEventListener('submit', e => {
    e.preventDefault()

    
    socket.emit('new-message', {
        name,
        message: input.value
    })

    
    if (!input.value.trim() == "") {
        const div = document.createElement('div')
        div.innerHTML += `You: ${input.value}`
        div.classList.add('chat', "chat2")
        chats.appendChild(div)
    }

    input.value = ''

})

socket.on('message', ({ name, message }) => {
    const DIV= document.createElement('div')
    DIV.innerHTML += `${name}: ${message}`
    DIV.classList.add('chat', "chat1")
    chats.appendChild(DIV)

    console.log(name, message);

})
