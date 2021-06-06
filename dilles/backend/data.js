import bcrypt from 'bcryptjs';
const data ={
    users: [
        {
          name: 'Jolanta' ,
          email: 'admin@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
            name: 'Pēteris' ,
            email: 'peteris@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
          },

    ],
    products:[
        {
            name: 'Ķirbju sēklas',
            category:'dried-foods',
            image: '/pictures/kirbju-seklas.JPG', 
            price: 15,
            countInStock:10,
            description: 'kaltētas ķirbju sēklas'

        },
        {
           
            name: 'Kaltēti pētersīļi',
            category:'dried-herbs',
            image: '/pictures/petersili.JPG', 
            price: 8,
            countInStock:10,
            description: 'sasmalcināti kaltēti pētersīļi'
        },
        {
            
            name: 'Kaltētas dilles',
            category:'dried-herbs',
            image: '/pictures/zavetas-dilles.JPG', 
            price: 7,
            countInStock:12,
            description: 'sasmalcinātas kaltētas dilles'
        },
        {
           
            name: 'Žāvēti āboli',
            category:'dried-foods',
            image: '/pictures/apples.JPG', 
            price: 8,
            countInStock:50,
            description: 'Saulē kaltēti āboli bez piedevām'
        },
        {
           
            name: 'Cidoniju sukādes',
            category:'dried-foods',
            image: '/pictures/cidoniju-sukades.JPG', 
            price: 10,
            countInStock:0,
            description: 'Cidoniju sukādes'
        },
        {
           
            name: 'Žāvētas plūmes',
            category:'dried-foods',
            image: '/pictures/zavetas-plumes.JPG', 
            price: 10,
            countInStock:15,
            description: 'Žāvētas tumšās plūmes'
        },
    ],
};
export default data;