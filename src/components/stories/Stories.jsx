
import "./stories.scss"

const Stories = () => {
    

    const stories = [
        {
            id: 1,
            name: "Rajan Shahi",
            img: "./images/gaming.webp"
        },

        {
            id: 2,
            name: "Loki Chaulagain",
            img: "./images/gaming.webp"
        },

        {
            id: 3,
            name: "Gita Bista",
            img: "./images/gaming.webp"
        },

        {
            id: 4,
            name: "Riya Thapa",
            img: "./images/gaming.webp"
        },
    ];
  return (

    <div className='stories'>
     {stories.map(story=>(
        <div className="story" key={story.id}>
            <img src={story.img} alt="" />
            <span>{story.name}</span>
            <button>+</button>
        </div>
     ))}
    </div>
  )
}

export default Stories
