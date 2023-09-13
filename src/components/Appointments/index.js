// Write your code here
import {Component} from 'react'

import {v4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {
    input: '',
    date: '',
    appointmentList: [],
    isActive: false,
  }

  enterInput = event => {
    this.setState({input: event.target.value})
  }

  enterDate = event => {
    this.setState({date: event.target.value})
  }

  addAppointments = event => {
    event.preventDefault()
    const {input, date} = this.state
    const newApp = {
      id: v4(),
      input,
      date,
      star: false,
    }

    this.setState(pre => ({
      appointmentList: [...pre.appointmentList, newApp],
      input: '',
      date: '',
    }))
  }

  starButton = id => {
    console.log(id)
    this.setState(pre => ({
      appointmentList: pre.appointmentList.map(each => {
        if (each.id === id) {
          console.log(each)
          return {...each, star: !each.star}
        }
        return each
      }),
    }))
  }

  onFilter = () => {
    const {isActive} = this.state
    this.setState({isActive: !isActive})
  }

  starImageButton = () => {
    const {appointmentList, isActive} = this.state
    if (isActive) {
      return appointmentList.filter(each => each.star === true)
    }
    return appointmentList
  }

  render() {
    const {input, date} = this.state

    const filteredData = this.starImageButton()

    return (
      <div className="appointments">
        <div className="appointments-con">
          <div className="inner-appointments">
            <div className="add-appointment">
              <h1 className="head">Add Appointments</h1>
              <form
                onSubmit={this.addAppointments}
                className="inner-add-appointment"
              >
                <div className="user-input-con">
                  <label htmlFor="title">Title</label>
                  <input
                    onChange={this.enterInput}
                    className="cursor"
                    id="title"
                    type="text"
                    value={input}
                  />
                </div>
                <div className="user-input-con">
                  <label htmlFor="date">Date</label>
                  <input
                    onChange={this.enterDate}
                    className="cursor"
                    id="date"
                    type="date"
                    value={date}
                  />
                </div>
                <button type="submit" className="but">
                  Add
                </button>
              </form>
            </div>
            <img
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
          <hr className="horizontal" />
          <div className="stared-text-con">
            <h1 className="heading-text">Appointments</h1>
            <button
              onClick={this.onFilter}
              className="but-starred"
              type="button"
            >
              Starred
            </button>
          </div>

          <ul className="ul-con">
            {filteredData.map(each => (
              <AppointmentItem
                key={each.id}
                starButton={this.starButton}
                each={each}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
