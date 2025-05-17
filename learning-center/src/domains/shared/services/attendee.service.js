import axios from 'axios'

/**
 * @summary Retrieves all attendees from the backend.
 * @returns {Promise<Array>} List of attendee objects
 */
export async function getAttendees() {
    try {
        const response = await axios.get('http://localhost:3000/attendees')
        return response.data
    } catch (error) {
        console.error('Error fetching attendees:', error)
        return []
    }
}
