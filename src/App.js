import React from 'react'
import UseApiFetch from './hooks/useApiFetch';
// import styled from 'styled-components';

//
// 

function App(props){
    // const [name,setName] = useState([]);

    // useEffect(()=> {
    //     const fetchData = async ()=>{
    //         const response = await fetch('https://475cd8d9-f083-41b3-982d-0430418098ec.mock.pstmn.io/demo');
    //         const newName = await response.json()
    //         setName(newName)
    //         console.log(newName)
    //     };
    //     fetchData()
    // },[props.id]);


        return(
            <div className='app'>
                

                <UseApiFetch/>
                {/* <Button>
                    {name.map((user) =>(
                        <div>{user.name}</div>
                    ))}
                </Button>
                 */}
            </div>
            
        )
    


}

export default App;







// function App(){
//   const [username,setUsername] = useState[null]
//   useEffect(()=>{
//     fetch("/api/users/random_user?size=3")
//     // .then(
//     //   response =>response.json())
//     .then(data=>setUsername(data.email))
    
    
//   })

//   return(
//     <div className='App'>
        
//       { username && username.map((user) =>user.email)}
//     </div>
//   );

//   };

//   export default App;


// function App() {
//     // 2. Create our *dogImage* variable as well as the *setDogImage* function via useState
//     // We're setting the default value of dogImage to null, so that while we wait for the
//     // fetch to complete, we dont attempt to render the image
//   let [dogImage, setDogImage] = useState(null)

//     // 3. Create out useEffect function
//   useEffect(() => {
//     fetch("https://dog.ceo/api/breeds/image/random")
//     .then(response => response.json())
//         // 4. Setting *dogImage* to the image url that we received from the response above
//     .then(data => setDogImage(data.message))
//   },[])

//   return (
//     <div className="App">
//         {/* 5. Using *dogImage as* the *src* for our image*/}
//     {dogImage && <img src={dogImage}></img>}
//     </div>
//   );
// }

// function App() {
//     // 2. Create our *dogImage* variable as well as the *setDogImage* function via useState
//     // We're setting the default value of dogImage to null, so that while we wait for the
//     // fetch to complete, we dont attempt to render the image
//   let [dogImage, setDogImage] = useState(null)

//     // 3. Create out useEffect function
//   useEffect(() => {
//     
//     .then(response => response.json())
//         // 4. Setting *dogImage* to the image url that we received from the response above
//     .then(data => setDogImage(data.message))
//   },[])

//   return (
//     <div className="App">
//         {/* 5. Returning an img element for each url, again with the value of our src set to the image url */}
//     {dogImage && dogImage.map((dog) => <img width={"200px"}height={"200px"} src={dog}></img>)}
//     </div>
//   );
// }

// export default function DataDisplayer(props) {
//     const [data, setData] = useState(null);
  
//     useEffect(() => {
//       const fetchData = async () => {
//         const response = await fetch(`https://swapi.dev/api/people/${props.id}/`);
//         const newData = await response.json();
//         setData(newData);
//       };
  
//       fetchData();
//     }, [props.id]);
  
//     if (data) {
//       return <div>{data.name}</div>;
//     } else {
//       return null;
//     }
//   }
  