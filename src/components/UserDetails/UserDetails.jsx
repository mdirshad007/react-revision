export default function UserDetails(){
    let userDetails=[
        {
            name:"Irshad",
            email:"md.irshad8447@gmail.com",
            address:{
                hn:4289,
                street:19,
                city:"delhi"
            }
        },
        {
            name:"Furquan",
            email:"furqan@gmail.com",
            address:{
                hn:4289,
                street:19,
                city:"delhi"
            }
        },
        {
            name:"Faiza",
            email:"faiza@gmail.com",
            address:{
                hn:4289,
                street:19,
                city:"delhi"
            }
        }
    ]
    return(
        <div className="text-left">
        <h2 className="text-2xl font-bold mb-5">User details</h2>
        {
            userDetails.map((item,index)=>{

                return <div className="mb-5" key={index}>
                    <p>Details of user no {index+1}</p>
                    <ul>
                        <li>Name: {item.name}</li>
                        <li>email: {item.email}</li>
                        <li>Address:<ul>
                            <li>House no:{item.address.hn}</li>
                            <li>Street:{item.address.street}</li>
                            <li>City:{item.address.city}</li>
                            </ul></li>
                    </ul>
                </div>
            })
        }
        </div>
    )
}