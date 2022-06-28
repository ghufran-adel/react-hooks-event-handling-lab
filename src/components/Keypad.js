// Code Keypad Component Here

export default function Keypad () {
    function HandleSubmit(e) {
       e.preventDefault();
       console.log(`Entering password...`);
     }
       return(
           <div>
            <input 
            type="password"  
            name="password"
            placeholder="Enter password"
            onChange={HandleSubmit}
            />
               
            </div>
       )
   }