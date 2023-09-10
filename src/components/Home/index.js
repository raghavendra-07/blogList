import './index.css'

const blogsList = [
  {
    id: 1,
    title: 'My first post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Aug 2nd',
  },
  {
    id: 2,
    title: 'My second post',
    description:
      'A high quality solution beautifully designed for startups and Bussiness schools',
    publishedDate: 'Mar 1st',
  },
  {
    id: 3,
    title: 'My third post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Jan 2nd',
  },
  {
    id: 4,
    title: 'My fourth post',
    description:
      'A high quality solution beautifully designed for startups and Bussiness schools. ',
    publishedDate: 'Dec 24th',
  },
  {
    id: 5,
    title: 'My fifth post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Nov 10th',
  },
]
const Home = () => (
  <div className="home-container">
    <div className="home-inner-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile"
      />
      <h1>Wade Warren</h1>
      <p className="developer">Software developer at UK</p>
    </div>
    <ul>
      {blogsList.map(eachBlog => (
        <li key={eachBlog.id} className="li-list-con">
          <div className="title-date-con">
            <h1>{eachBlog.title}</h1>
            <p className="date">{eachBlog.publishedDate}</p>
          </div>
          <p className="para">{eachBlog.description}</p>
        </li>
      ))}
    </ul>
  </div>
)

export default Home
