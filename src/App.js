
import { useEffect, useState } from 'react';
import './App.css';
import CategoryList from './CategoryList/categorylist';
import Header from './Header/header';
import axios from './axios';
import Loading from './Loading/loading';
import Fastfoodlist from './FastFoodList/fastFoodList';
import SearchBar from './SearchBar/searchBar';
import notFound from './assets/images/404.png'


function App() {

  const[loading,setLoading]=useState(false);
  const[fastFoodItems,setFastFoods]=useState([]);
  const fetchData=async(categoryId=null)=>{

    setLoading(true);
    const response=await axios.get(`/FastFood/list/${categoryId ? '?categoryId='+categoryId:'' }`);
    
    setLoading(false);
    setFastFoods(response.data)


  }


  

  useEffect(()=>{

     fetchData();
  },[]);



  const fliterItems=(categoryId)=>{
    fetchData(categoryId);


  }

  const searchItems= async(term)=>{
    setLoading(true);
    const response=await axios.get(`/FastFood/search/${term ?'?term='+term:''}`);
    setLoading(false)
    setFastFoods(response.data);
  }
  const renderContent=()=>{
if(loading){
  return <Loading theme={'dark'}></Loading>
}

if(fastFoodItems.length===0){
return(
  <>
  <div className='alert alert-warning text-center'>
    برای کلید واژه فوق هیچ ایتمی یافت نشد 
  </div>
  <img className='mx-auto mt-5 d-block' src={notFound} alt='عکس'/>
  </>
)

}
return <Fastfoodlist  fastFoodItems={fastFoodItems}></Fastfoodlist>


  }
  return (
    <div className='wrapper bg-faded-dark'>
      <Header/>
      <CategoryList fliterItems={fliterItems}>
      <SearchBar searchItems={searchItems}/>
      </CategoryList>
      
      <div className='container mt-4'>

        {renderContent()}
      </div>
    </div>
  );
}

export default App;
