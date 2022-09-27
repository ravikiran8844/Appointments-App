import './index.css'
import {format} from 'date-fns'

const AppointmentItem = props => {
  const {details, changeStarredStatus} = props
  const {title, date, id, isStarred} = details

  const starredImage = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const handleClick = () => {
    changeStarredStatus(id)
  }

  return (
    <li className="m-3">
      <div className="card p-3">
        <div className="d-flex justify-content-between">
          <p className="text-dark">{title}</p>
          <div>
            <button
              //   testid="star"
              onClick={handleClick}
              className="starButton"
              type="button"
            >
              <img className="star" src={starredImage} alt="star" />
            </button>
          </div>
        </div>
        <p>{format(new Date(date), 'dd MMMM yyyy, EEEE')}</p>
      </div>
    </li>
  )
}

export default AppointmentItem
