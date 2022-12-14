import NewMeetupForm from '../components/meetups/NewMeetupForm'
import { useNavigate } from 'react-router-dom'
function NewMeetupPage() {
  const navigate = useNavigate()
  const onAddMeetupHandler = (meetupData) => {
    fetch(
      'https://react-meetup-cf5b4-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    ).then(() => {
      navigate('/')
    })
  }
  return (
    <section>
      <h1>Add new meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler}></NewMeetupForm>
    </section>
  )
}

export default NewMeetupPage
