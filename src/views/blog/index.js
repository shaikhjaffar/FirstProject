
import "./style.css"
import Content from "./main/main"
import Search from './search/index'
import Calendar from './calendar/Calendarstyledemo'
const Blog = () => {
    return (
      <div className="blog card">
        <section className="search-calendar">
        <Search/>
        <Calendar/>
        </section>
         <section className="main">
         <Content/>
         </section>
        
      </div>
    )
  }

export default Blog
