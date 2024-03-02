import Description from "./Description"
import './StudentProfile.css'

function StudentProfile() {
  return (
    <div className="studentProfile">
        <div className="profileTop">            
            <img src="https://source.unsplash.com/random?wallpaper/"/>        
            <div className="info">
                <h1>Pragyan Bauni Lol</h1>
                <p className='moreInfo'>First Year</p>
                <p className='moreInfo'>National Institute of Technology,Rourkela</p>            
            </div>
        </div>
        <div className="profileBottom">
            
            <div className="desc">
                <Description/>
            </div>

        </div>
    </div>
  )
}

export default StudentProfile