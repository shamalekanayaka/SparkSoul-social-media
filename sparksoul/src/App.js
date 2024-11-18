import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login/login'
import Register from './Pages/Register/Register';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  ProtectedRoute
} from "react-router-dom";
import NavBar from './Components/navBar/NavBar';
import LeftBar from './Components/leftBar/LeftBar';
import RightBar from './Components/rightBar/RightBar';
import Home from './Pages/Home/Home'
import Profile from './Pages/Profile/Profile'
import Question from './Pages/Questionnaire/Question'
import './style.scss'
import Result from './Pages/Result/Result';


function App() {

  

  const Layout = ()=>{
    return(
      <div className='theme-dark'>
        <NavBar />
        <div style={{display:"flex"}}>
        <LeftBar />
        <div style={{flex:"6"}}>
        <Outlet />
        </div>
        <RightBar />
        </div>
      </div>
    )
  }

 const ProtectedRoute = ({children}) =>{
  const currentUSer = false;
  if(!currentUSer){
    return <Navigate to="/login"/>
  }
  return children
  
 }

    const router = createBrowserRouter([
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <ProtectedRoute><Home /></ProtectedRoute>,
          },
          {
            path: '/Profile/:id',
            element: <ProtectedRoute><Profile /></ProtectedRoute>,
          },
        ],
      },
      { path: "/Login", element: <Login /> },
      { path: "/Register", element: <Register /> },
      { path: "/Question", element: <Question /> },
      {path: "/result/:mbtiType/:username", element: <Result />},
    ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;