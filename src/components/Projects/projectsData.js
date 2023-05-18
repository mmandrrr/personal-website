import todoList from '../../assets/projects/todoList-min.webp';
import portfolio from '../../assets/projects/portfolio-min.webp';
import marvelApi from '../../assets/projects/marvelApi-min.webp';
import vetclinic from '../../assets/projects/vetclinic-min.webp';
import iceCream from '../../assets/projects/iceCream-min.webp';


export const projects = [
    {
        image: iceCream,
        idName: 'ice-cream',
        link: 'https://github.com/mmandrrr/ice-cream',
        hosted: false,
        hosting: ''
    },
    {
        image: todoList,
        idName: 'todo-list',
        link: 'https://github.com/mmandrrr/todo-list',
        hosted: false,
        hosting: ''
    },
    {
        image: portfolio,
        idName: 'portfolio',
        link: 'https://github.com/mmandrrr/personal-website',
        hosted: false,
        hosting: ''
    },
    {
        image: marvelApi,
        idName: 'marvel-api',
        link: 'https://github.com/mmandrrr/marvel_api_proj',
        hosted: false,
        hosting: ''
    },
    {
        image: vetclinic,
        idName: 'vetclinic',
        link: 'https://github.com/mmandrrr/VetClinic-React',
        hosted: true,
        hosting: 'https://vet-clinic-react.vercel.app/'
    },
]