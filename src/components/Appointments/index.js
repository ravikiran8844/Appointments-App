import React from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import AppointmentItem from '../AppointmentItem'

class Appointments extends React.Component {
  state = {appoinstmentList: [], title: '', date: ''}

  addAppointment = () => {
    const {title, date} = this.state
    if (title && date !== '') {
      const newAppointment = {title, date, id: uuidv4(), isStarred: false}
      this.setState(prevState => ({
        appoinstmentList: [...prevState.appoinstmentList, newAppointment],
      }))
      this.setState({title: '', date: ''})
    }
  }

  getTitle = e => {
    this.setState({title: e.target.value})
  }

  getDate = e => {
    this.setState({date: e.target.value})
  }

  changeStarredStatus = id => {
    this.setState(prevState => ({
      appoinstmentList: prevState.appoinstmentList.map(each => {
        if (each.id === id) {
          return {...each, isStarred: !each.isStarred}
        }
        return each
      }),
    }))
  }

  render() {
    const {appoinstmentList, title, date} = this.state
    // console.log(title)
    // console.log(date)
    console.log(appoinstmentList)

    return (
      <div className="container">
        <div className="bg-light cardContainer m-3 row">
          <div className="col-12 col-md-6 d-flex flex-row justify-content-center p-5">
            <div>
              <h1>Add Appointment</h1>
              <form>
                <label htmlFor="title">TITLE</label>
                <input
                  value={title}
                  onChange={this.getTitle}
                  className="form-control mb-3"
                  id="title"
                  type="text"
                  placeholder="Title"
                />
                <label htmlFor="date">DATE</label>
                <input
                  value={date}
                  onChange={this.getDate}
                  className="form-control mb-3"
                  id="date"
                  type="date"
                />
                <button
                  type="button"
                  onClick={this.addAppointment}
                  className="btn addbutton mb-3"
                >
                  Add
                </button>
              </form>
            </div>
            <div className="d-none d-md-block col-md-6">
              <img
                className="topImage"
                alt="appointments"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              />
            </div>
          </div>
          <div className="col-12">
            <hr />

            <div className="d-flex flex-row justify-content-between">
              <h1>Appointments</h1>
              <button
                onClick={this.changeStarredStatus}
                type="button"
                className="btn starredButton"
              >
                Starred
              </button>
            </div>
          </div>
          <ul className="col-md-4 flex-row justify-content-between">
            {appoinstmentList.map(each => (
              <AppointmentItem
                changeStarredStatus={this.changeStarredStatus}
                details={each}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
