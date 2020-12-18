import React,{useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
function FeedPost() {

    const [like,setLike]=useState(true);
    const [heartData,setHeartData]=useState();
    useEffect(() => {
        setHeartData(getHeart());
    
    }, [like])
    // var heartData=<div></div>;
    function getHeart(){
       
        if(like)
        {
            return <i class="fa fa-heart  likedHeart" aria-hidden="true" onClick={likeToggel}></i>
        }
        else
        {
            return <i class="fa fa-heart-o" aria-hidden="true" onClick={likeToggel}></i>
        }
       
    }

    const likeToggel=()=>{
        setLike(!like);
    }

    return (
        <div>
                     <Card className="postCard">
                    <Card.Header className="postCardHead">
                    <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                        className="profilePicPost"
                    ></img>
                    <div className="postCardHeadText">
                        <div className="usernamePost">test name</div>
                      
                        <div className="locationPost">test location</div>
                           
                    </div>
                    
                    </Card.Header>
                    
                    <Card.Body className="postCardBody">
            
                    <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                        className="picPost"
                    ></img>
                    
                
                    </Card.Body>
                    <Card.Body className="postCardBody">
                    
                    <div className="postCardBodyText">
                        
                        <div className="likeIcon">
                            {heartData}
                        </div>
                         
                        <div className="commentIcon">
                            <svg aria-label="Comment" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg>
                        </div>
                        
                    </div>

                    {/* <i class="fa fa-heart-o" aria-hidden="true"></i>
                    <i class="fa fa-heart" aria-hidden="true"></i>
                        test */}
                    </Card.Body>

                    <Card.Footer>

                        {/* <a href="/" style={{color:'#262626'}}>Back To Login</a> */}
                    </Card.Footer>
                    </Card>
        </div>
    )
}

export default FeedPost
