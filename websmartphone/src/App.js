import {Routes, Route, Router} from 'react-router-dom';
import { Fragment } from 'react';
import { publicRouters } from './routers';
import DefaultLayout from './Components/Layout/DefaultLayout';
import './App.css'
import withAuthen from './Components/HOC/withAuthen';

function App() {
  return (
    <>
        <div className="App">
          <Routes>
            {publicRouters.map((route,index) => {
              let Layout = DefaultLayout;
              if(route.layout){
                Layout = route.layout;
              }else if(route.layout === null){
                Layout = Fragment;
              }
              const Page = route.component;
              // const withAtuthencatied = withAuthen(Layout);
              return <Route 
                key={index} 
                path={`${route.param ? `${route.path}/:${route.param}` : `${route.path}`}`} 
                element={<Layout><Page/></Layout>}/>
            })}
          </Routes>
        </div>
        
      </>
  );
}

export default App;
