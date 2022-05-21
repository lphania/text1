import vueRouter from 'vue-router'
import About from '../pages/About'
import Student from '../pages/Student'
import News from '../pages/News'
import Messagess from '../pages/Messagess'
import Detail from '../pages/Detail'


export default new vueRouter({
    routes: [
        {
            path: '/about',
            component: About,
            children: [{

                path: 'news',
                component: News

            }, {

                path: 'message',
                component: Messagess,
                children:[{
                    path:'detail',
                    component: Detail,
                    props($route){
                        return {id:$route.query.id,
                        title:$route.query.title
                        }
                    }
                }]

            }]
        },
            {
                path: '/Student',
                component: Student,

            }
    ]
})