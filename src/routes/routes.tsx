

import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home";
const publicRoutes = [
    {
        layout:AppLayout,
        routes:[
            {
                path: '/',
                component:Home
            }
        ]
    },
    
] 
const privateRoutes =[
    {
        layout:AppLayout,
        routes:[
            {
                path: '/admin',
                component:Home
            },
           
        
        ]
    },
   
   
]
export { publicRoutes ,privateRoutes } ;