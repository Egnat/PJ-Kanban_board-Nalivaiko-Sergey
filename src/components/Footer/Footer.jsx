import './Footer.css'
import { LIST_TYPES, LIST_COPY } from '../constData/constData.js'

function Footer(props) {
  const {todo} = props
  const activeTasks = todo.filter(task => task.type === LIST_TYPES.BACKLOG)
  const finishedTasks = todo.filter(task => task.type === LIST_TYPES.FINISHED)
    return ( 
      <footer className="footer">
        <div className="footer-left">
            <p className="footer-text">Active tasks: {activeTasks.length}</p>
            <p className="footer-text">Finished tasks: {finishedTasks.length}</p>
        </div>
        <div className='footer-right'>
            <p className='footer-text'>Kanban Board by Sergey, 2022 year</p>
        </div>
      </footer>
    );
}

export default Footer;