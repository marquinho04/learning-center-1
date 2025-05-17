import axios from 'axios'

export async function getExams() {
    try {
        const response = await axios.get('http://localhost:3001/exams')
        return response.data
    } catch (error) {
        console.error('Error fetching exams:', error)
        return []
    }
}