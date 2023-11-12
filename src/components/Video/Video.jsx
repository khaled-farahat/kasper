import vid from '../../assets/awesome-video.mp4'
import './Video.css'

export default function Video() {
  return (
    <section className="vid">
      <video autoPlay loop muted>
        <source src={vid} type="video/mp4" />
      </video>
      <div className='text'>
        <h1>SUPER AWESOME VIDEO HERE</h1>
        <p>its all you need</p>
        <button>see more</button>
      </div>

    </section>
  )
}
