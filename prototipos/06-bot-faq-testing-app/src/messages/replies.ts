


type Reply ={
    greeting: string,
    parking: string,
    restaurants: string,
    guide: string,
    bye:string
}


export const replyCustomer:Reply = {
    greeting : 'Hola! \nEspero se encuentre bien 😊 \n¿en que te puedo ayudar?',
    parking : 'El parking más cercano es el SABA en la Plaza de la Concordia, al lado del Corte Inglés del Duque.\nParking Saba Plaza Concordia\nPl. de la Concordia, s/n, 41002 Sevilla\nhttps://goo.gl/maps/7xmTfySVVRJEGERk8',
    restaurants : '¿quiere que le recomiende restaurantes o bares de tapas por nuestra zona?',
    guide : `

        Nuestra guía es historiadora del arte y recomienda los siguientes tiempos según lo que desees visitar. También puede adaptarse a tus necesidades:

        * 2h: Visita panorámica a pie por las calles de la zona monumental o cualquier otra zona.
        * 2,5h: Visita panorámica a pie + 1 monumento (generalmente la Catedral o el Alcázar son los más solicitados).
        * 3h: 2 monumentos o visita panorámica larga + 1 monumento.
        * 3,5h: Visita panorámica a pie + 2 monumentos.

        Las entradas deben comprarse por separado. Antes de adquirirlas, debemos coordinarnos cuidadosamente con la guía para asegurarnos de que coincidan con su disponibilidad horaria.

        Necesitamos algunos datos para comprobar disponibilidad:

        * Nombre
        * Nº de personas
        * Idioma
        * Fecha
        * Tipo de visita
        * ¿Horario aproximado?
        * ¿Alguna solicitud especial?

    `,
    bye:'Hasta luego 😀 estamos en contacto para lo que necesite!'

}