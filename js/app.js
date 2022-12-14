const contacts =  [ 
    {
        name: 'Michele',
        avatar: './img/avatar_1.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            }, 
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
            } 
        ],
    },
    {
        name: 'Fabio',
        avatar: './img/avatar_2.jpg',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
            }, 
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            }, 
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Samuele',
        avatar: './img/avatar_3.jpg',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
            } 
        ],
    }, 
    {
        name: 'Alessandro B.',
        avatar: './img/avatar_4.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro L.',
        avatar: './img/avatar_5.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received'
            }
        ],
    },
    {
        name: 'Claudia',
        avatar: './img/avatar_6.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novit???',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent'
            }
        ],
    }, 
    {
        name: 'Federico',
        avatar: './img/avatar_7.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received'
            } 
        ],
    },
    {
        name: 'Davide',
        avatar: './img/avatar_8.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received'
            }
        ],
    }
];

const app = new Vue ({
    el: '#app',
    data:{
        contacts,
        currentContact: contacts[0],
        userMessage: '',
        userSearch: ''
    },
    computed:{
        searchContact(){
            let inputRawMsg = this.userSearch.trim()
            if(inputRawMsg === '') inputRawMsg = ''
            
            return this.contacts.filter(res => res.name.toLowerCase().includes(inputRawMsg.toLowerCase()))
        }
    },
    methods:{
        setCurrentContact(contact){
            this.currentContact = contact
            // console.log(this.currenContact)
        },
        sendMessage(){
            const temp = this.currentContact.messages
            // console.log(temp)

            const inputRawMsg = this.userMessage.trim()
            if(inputRawMsg === '') return
            
            const message = {
                date: '10/01/2020 15:30:55',
                message: inputRawMsg,
                status: 'sent'
            }
            temp.push(message)

            setTimeout(() => {
                const contactMessage = {
                    date: '10/01/2020 15:30:55',
                    message: 'Viva HomeLander',
                    status: 'received'
                }
                temp.push(contactMessage)
            },1000)

            this.userMessage = ''
        }
    }
})

// const app = new Vue({
//     el: '#app',
//     data: {
//         contacts,
//         currentContactChat: '',
//         currentContactInfo: '',
//         currentChat: new Array(),
//         typedMessage: '',
//         responseMessage: '',
//         i: 0,
//     },
//     computed:{
//         getChat(){
//             this.currentChat = []
//             // console.log(this.currentChat)
            
//             for(this.i in this.currentContactChat){
//                 this.currentChat.push(this.currentContactChat[this.i]) 
//             }
            
//             return this.currentChat
//         },
//         getInfo(){
//             // console.log(this.currentContactInfo)
//             this.currentContactInfo = this.currentContactInfo

//             return this.currentContactInfo
//         }
//     },
//     methods: {
//         setChat(i){
//             this.setInfo(i) 
//             return this.currentContactChat = this.contacts[i].messages
//         },
//         setInfo(j){
//             this.contacts[j].visible = !this.contacts[j].visible

//             // console.log(this.contacts[j].name)
//             return this.currentContactInfo = this.contacts[j]
//         },
//         sendMessage(){
//             this.currentContactInfo.messages.push(
//                 {
//                     date: '10/01/2020 15:30:55',
//                     message: this.typedMessage,
//                     status: 'sent'
//                 })
//                 this.receveidMessage()
//             this.typedMessage = ''
//         },
//         receveidMessage(){
//             setTimeout(() => {
//                 this.currentContactInfo.messages.push(
//                     {
//                         date: '10/01/2020 15:30:55',
//                         message: 'Halo',
//                         status: 'received'
//                     })
//             }, 1000)
//         }
//     }
// });