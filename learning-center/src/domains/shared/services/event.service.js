import axios from 'axios'

/**
 * @summary Retrieves all events from the backend.
 * @returns {Promise<Array>} List of event objects
 */
export async function getEvents() {
    try {
        const response = await axios.get('http://localhost:3000/events')
        return response.data
    } catch (error) {
        console.error('Error fetching events:', error)
        return []
    }
}
