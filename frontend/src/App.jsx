import {useEffect,useState} from "react";
import axios from "axios";

function App(){

const API="http://13.203.226.163:5000";

const [name,setName]=useState("");

const [criminals,setCriminals]=useState([]);

const load=async()=>{

const res = await axios.get(API+"/criminals");

setCriminals(res.data);

};

useEffect(()=>{

load();

},[]);


const addCriminal=async()=>{

if(!name) return;

await axios.post(API+"/criminals",{

name

});

setName("");

load();

};


const eliminate=async(i)=>{

await axios.delete(API+"/criminals/"+i);

load();

};

const capture=async(i)=>{

await axios.put(API+"/criminals/"+i);

load();

};


return(

<div style={{

background:"#050505",
minHeight:"100vh",
width:"100vw",
color:"white",
padding:"30px",
boxSizing:"border-box",
fontFamily:"monospace"

}}>

<h1 style={{

fontSize:"40px",
marginBottom:"20px",
color:"#FFD700"

}}>

🦇 BATCOM — GOTHAM THREAT MONITOR

</h1>



{/* ADD PANEL */}

<div style={{

background:"#111",
padding:"20px",
borderRadius:"10px",
marginBottom:"20px"

}}>

<h3>Add Criminal To Surveillance</h3>

<input

placeholder="Enter Criminal Name"

value={name}

onChange={(e)=>setName(e.target.value)}

style={{

padding:"10px",
marginRight:"10px",
borderRadius:"5px",
border:"none"

}}

/>

<button

onClick={addCriminal}

style={{

background:"#FFD700",
color:"black",
padding:"10px 18px",
borderRadius:"6px",
fontWeight:"bold",
cursor:"pointer"

}}

>

➕ Add Criminal

</button>

</div>



{/* GRID */}

<div style={{

display:"grid",
gridTemplateColumns:"1fr 2fr 1fr",
gap:"20px"

}}>


{/* STATS */}

<div style={{

background:"#111",
padding:"20px",
borderRadius:"10px"

}}>

<h3>📊 Stats</h3>

<p>Total Targets : {criminals.length}</p>

<p>

Captured :

{

criminals.filter(c=>c.captured).length

}

</p>

</div>



{/* WHITEBOARD */}

<div style={{

background:"#101010",
padding:"20px",
borderRadius:"10px"

}}>

<h2>🧾 Investigation Board</h2>

{

criminals.map((c,i)=>(

<div

key={i}

style={{

borderBottom:"1px solid gray",
padding:"15px",
display:"flex",
justifyContent:"space-between"

}}

>

<span

style={{

textDecoration:
c.captured?"line-through":"none"

}}

>

🕶 {c.name}

</span>

<div>

<button

onClick={()=>capture(i)}

style={{

marginRight:"10px"

}}

>

Captured

</button>

<button

onClick={()=>eliminate(i)}

style={{

background:"red",
color:"white",
border:"none",
padding:"5px 10px",
cursor:"pointer"

}}

>

⚠ Threat Eliminated

</button>

</div>

</div>

))

}

</div>



{/* ALERT FEED */}

<div style={{

background:"#111",
padding:"20px",
borderRadius:"10px"

}}>

<h3>🚨 Alerts</h3>

<p>Arkham Escape Risk : LOW</p>

<p>City Status : Stable</p>

<p>Bat Signal : ACTIVE</p>

</div>

</div>

</div>

);


}

export default App;
