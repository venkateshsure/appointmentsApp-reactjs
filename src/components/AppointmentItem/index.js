// Write your code here

import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {each, starButton} = props
  const {id, input, date, star} = each
  // console.log(format(new Date(date), 'dd MMMM yyyy,EEEE'))
  const newDate = format(new Date(date), 'dd MMMM yyyy, EEEE')
  const starImage = star
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  // const starAlt = star ? 'star' : ''

  const starredButton = () => {
    starButton(id)
  }

  return (
    <li className="list-con">
      <div className="starred-con">
        <div className="inner-starred-con">
          <p>{input}</p>
          <p>Date:{newDate}</p>
        </div>
        <button
          data-testid="star"
          className="star-but"
          type="button"
          onClick={starredButton}
        >
          <img className="star-image" src={starImage} alt="star" />
        </button>
      </div>
    </li>
  )
}

export default AppointmentItem
