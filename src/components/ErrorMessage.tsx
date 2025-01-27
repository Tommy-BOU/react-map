export default function ErrorMessage({ message }: { message: string }) {
    return (
        <div style={{fontFamily:"roboto", fontWeight:"bold", display:"flex", justifyContent:"center", alignItems:"center", width:"50%", height:"50px", position:"absolute", zIndex:"100", top:"50%", left:"50%", transform:"translate(-50%, -50%)", backgroundColor:"white", border:"1px solid red"}}>
            <p>{message}</p>
        </div>
    )

}