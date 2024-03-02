import Description from "./Description"
import RadioGroupRating from './Rating'
import './StudentProfile.css'

function TeacherProfile() {
  return (
    <div className="studentProfile">
        <div className="profileTop">            
            <img src="https://source.unsplash.com/random?wallpaper/"/>        
            <div className="info">
                <h1>Pragyan Bauni Lol</h1>
                <p className='moreInfo'>First Year</p>
                <p className='moreInfo'>National Institute of Technology,Rourkela</p>            
                <div className="rating">
                    <RadioGroupRating/>
                </div>
                <div className="tags">
                    <div className="tag">designing</div>
                    <div className="tag">designing</div>
                    <div className="tag">designing</div>
                    <div className="tag">designing</div>
                    <div className="tag">designing</div>
                    <div className="tag">designing</div>
                    <div className="tag">designing</div>
                    <div className="tag">designing</div>
                </div>
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

export default TeacherProfile