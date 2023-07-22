export const Player=({song,fn})=>{
    return(
      <div>
         <button onClick={()=>{
            fn(false,null);
         }}className='btn btn-success'>Back to Songs</button>
         <p>
         <img src={song.artworkUrl100}/>
         {song?.artistName} {song?.trackName}
         </p>
        <audio controls>
            <source src={song?.previewUrl} type="audio/mp4"/>
            Your Browser does not support the audio element.
        </audio>
      </div>
    )
}